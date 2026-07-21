/* 简历构建脚本
   两种模式（通过环境变量 RESUME_THEME 切换）：
   - 单主题（默认 RESUME_THEME=jsonresume-theme-cjean）：渲染一个主题 → dist/index.html
     用于线上简历站点，注入 ✏️编辑/🖨️打印/🔗GitHub 三件套（无切换面板）
   - 多模板（RESUME_THEME=all）：渲染 theme_pkgs.txt 全部主题 → dist/themes/<name>/index.html
     + dist/index.html 主页，注入主题切换面板（🎨切换 + ✏️编辑 + 🖨️打印 + 🔗GitHub）
   两者均做数据清洗（丢弃非法 url/image）并容错（单主题失败整体报错，多模板单主题失败仅 SKIP）。

   数据清洗 + 异步渲染 + 主题切换面板的「编辑开关」实现，参考 jsonresume-theme-even 演示站。
*/
const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const THEME = process.env.RESUME_THEME || 'jsonresume-theme-even';
const MULTI = THEME === 'all';

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, 'themes'), { recursive: true });

// 0) 清洗简历数据：严格主题（如 cjean）会用 Zod 校验 url/image 为合法 URL，
//    空字符串 "" 或非法值会抛 ZodError 导致构建崩溃。渲染前统一丢弃非法 URL 字段。
function isValidUrl(v) {
  if (typeof v !== 'string' || !v.trim()) return false;
  try {
    const u = new URL(v);
    return u.protocol === 'http:' || u.protocol === 'https:' || u.protocol === 'mailto:';
  } catch (_) { return false; }
}
function sanitize(obj) {
  if (Array.isArray(obj)) return obj.map(sanitize);
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const k of Object.keys(obj)) {
      const v = obj[k];
      const lk = String(k).toLowerCase();
      if ((lk === 'url' || lk === 'website' || lk === 'image') && typeof v === 'string') {
        if (!isValidUrl(v)) continue;
      }
      out[k] = sanitize(v);
    }
    return out;
  }
  return obj;
}

// 1) 准备中文简历数据
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'resume.json'), 'utf-8'));
const zh = sanitize({ ...data.zh, meta: data.meta });
fs.writeFileSync(path.join(ROOT, 'resume.zh.json'), JSON.stringify(zh));

// 2) 注入脚本（单主题用 inject.js，多模板用 inject-multi.js）
function injectInto(html, themeList, multi) {
  // 移除 cjean 等主题 footer 的作者署名（"made with love by cjean.fr"），避免给主题作者导流
  html = html.replace(/<footer[\s\S]*?<\/footer>/gi, '');
  const injectJS = fs.readFileSync(path.join(ROOT, multi ? 'inject-multi.js' : 'inject.js'), 'utf-8');
  const injectScript = `<script>${injectJS}</script>`;
  const printStyle = `<meta name="viewport" content="width=device-width, initial-scale=1.0"><style>@media print{body{box-shadow:none!important;max-width:100%!important;margin:0!important;padding:0!important}#resume-nav{display:none!important}#resume-theme-overlay{display:none!important}a[href]{color:#000!important;text-decoration:underline!important}a[href]:after{content:" (" attr(href) ")"!important;font-size:.82em;color:#333!important;word-break:break-all}}</style>`;
  const listScript = multi ? `<script>window.__THEMES__=${JSON.stringify(themeList)};</script>` : '';
  html = html.replace('</head>', printStyle + listScript + '</head>');
  html = html.replace('</body>', injectScript + '</body>');
  return html;
}

// 3) 安装并渲染单个主题，返回注入后的完整 HTML
async function renderOne(pkg, multi) {
  execSync(`npm install --no-save --no-audit --no-fund --legacy-peer-deps --no-package-lock ${pkg}`, { stdio: 'ignore', cwd: ROOT });
  let html;
  if (pkg === 'jsonresume-theme-even') {
    execSync('npx jsonresume-theme-even < resume.zh.json > dist/_even.html', { stdio: 'inherit', cwd: ROOT });
    html = fs.readFileSync(path.join(DIST, '_even.html'), 'utf-8');
    fs.rmSync(path.join(DIST, '_even.html'));
  } else {
    const mod = require(pkg);
    const fn = (typeof mod === 'function') ? mod : (mod && mod.render);
    if (typeof fn !== 'function') throw new Error('no render()');
    html = fn(zh);
    if (html && typeof html.then === 'function') html = await html; // 支持异步主题（如 cjean）
    if (typeof html !== 'string') throw new Error('bad output');
    if (!/^\s*<!doctype|<html/i.test(html)) {
      html = '<!doctype html><html><head><meta charset="utf-8"></head><body>' + html + '</body></html>';
    }
  }
  return injectInto(html, multi ? [] : null, multi);
}

// 3.5) 复制 JSON 编辑器页面 + 主题 bundle 到 dist（方案 C：新增 /editor.html）
function copyEditorAssets() {
  for (const f of ['editor.html', 'even-browser.mjs']) {
    const src = path.join(ROOT, f);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(DIST, f));
      console.log('➡ 已复制', f, '→ dist/');
    } else {
      console.log('⚠ 未找到', f, '，跳过编辑器页面');
    }
  }
}

// 4) 解析主题清单
function parsePkgs() {
  const pkgs = fs.readFileSync(path.join(ROOT, 'theme_pkgs.txt'), 'utf-8')
    .split('\n').map(s => s.trim()).filter(Boolean);
  const themes = [];
  const seen = new Set();
  pkgs.forEach(p => {
    let m = p.match(/^jsonresume-theme-(.+)$/);
    let scope = '';
    if (!m) {
      const sm = p.match(/^@([^/]+)\/jsonresume-theme-(.+)$/);
      if (sm) { scope = sm[1] + '-'; m = [null, sm[2]]; }
      else return;
    }
    const short = (scope + m[1]).replace(/[^a-z0-9-]/gi, '-').toLowerCase();
    if (seen.has(short)) return;
    seen.add(short);
    themes.push({ pkg: p, short });
  });
  return themes;
}

// 5) 构建
async function build() {
  if (!MULTI) {
    console.log(`渲染主题：${THEME}`);
    const html = await renderOne(THEME, false);
    fs.writeFileSync(path.join(DIST, 'index.html'), html);
    console.log(`✅ 构建完成：${THEME} → dist/index.html`);
    copyEditorAssets();
    return;
  }

  // 多模板模式
  const themes = parsePkgs();
  const evenIdx = themes.findIndex(t => t.pkg === 'jsonresume-theme-even');
  if (evenIdx > 0) { const [e] = themes.splice(evenIdx, 1); themes.unshift(e); }

  const results = [];
  for (const t of themes) {
    try {
      const html = await renderOne(t.pkg, true);
      const name = t.pkg.replace(/^@[^/]+\//, '').replace(/^jsonresume-theme-/, '');
      const dir = path.join(DIST, 'themes', t.short);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.html'), html);
      results.push({ name, path: `themes/${t.short}/index.html` });
      console.log('OK ', name);
    } catch (e) {
      console.log('SKIP', t.short, '->', (e.message || '').split('\n')[0].slice(0, 60));
    }
  }
  if (!results.length) { console.error('❌ 没有任何主题渲染成功'); process.exit(1); }

  // 主页 = 第一个成功渲染的主题；再回填主题清单到所有页面（切换面板才能列出全部主题）
  fs.copyFileSync(path.join(DIST, results[0].path), path.join(DIST, 'index.html'));
  const listScript = `<script>window.__THEMES__=${JSON.stringify(results)};</script>`;
  const fillList = (file) => {
    if (!fs.existsSync(file)) return;
    let h = fs.readFileSync(file, 'utf-8');
    h = h.replace('</head>', listScript + '</head>');
    fs.writeFileSync(file, h);
  };
  fillList(path.join(DIST, 'index.html'));
  results.forEach(r => fillList(path.join(DIST, r.path)));

  console.log(`✅ 构建完成：主页 + ${results.length} 个主题`);
  copyEditorAssets();
}

build().catch(e => {
  console.error('❌ 构建失败：', e.message);
  process.exit(1);
});
