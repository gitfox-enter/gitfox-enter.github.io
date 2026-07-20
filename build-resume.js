/* 简历构建脚本
   - 一次性批量安装所有主题（避免逐个安装互相修剪）
   - 渲染 even 主题为站点主页 (dist/index.html)
   - 渲染全部 JSON Resume 主题为 dist/themes/<name>/index.html
   - 注入导航（🎨主题 / 🖨️打印 / 🔗GitHub）+ 主题切换面板 + 点文字直接编辑
   - 失败的的主题自动跳过；主页缺失时自动兜底
*/
const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');

// 清理并重建 dist
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, 'themes'), { recursive: true });

// 1) 准备中文简历数据
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'resume.json'), 'utf-8'));
const zh = { ...data.zh, meta: data.meta };
fs.writeFileSync(path.join(ROOT, 'resume.zh.json'), JSON.stringify(zh));

// 2) 读取主题包清单
const pkgs = fs.readFileSync(path.join(ROOT, 'theme_pkgs.txt'), 'utf-8')
  .split('\n').map(s => s.trim()).filter(Boolean);

// 3) 解析包名 → 短名（用于目录/展示）
const themes = [];
const seen = new Set();
pkgs.forEach(p => {
  let m = p.match(/^jsonresume-theme-(.+)$/);
  let scope = '';
  if (!m) {
    const sm = p.match(/^@([^/]+)\/jsonresume-theme-(.+)$/);
    if (sm) { scope = sm[1] + '-'; m = [null, sm[2]]; }
    else return; // 非主题包，跳过
  }
  const short = (scope + m[1]).replace(/[^a-z0-9-]/gi, '-').toLowerCase();
  if (seen.has(short)) return;
  seen.add(short);
  themes.push({ pkg: p, short });
});

console.log(`共解析到 ${themes.length} 个主题`);

// 4) 把 even 排到最前：它装完立刻渲染，避免被后续安装修剪
const evenIdx = themes.findIndex(t => t.pkg === 'jsonresume-theme-even');
if (evenIdx > 0) {
  const [even] = themes.splice(evenIdx, 1);
  themes.unshift(even);
}

// 5) 渲染每个主题（每个主题：先装再用，装完立即渲染，不被后续修剪影响）
const results = []; // { name, path }
const builtPaths = []; // 已成功渲染的 HTML 路径（用于兜底主页）

function injectInto(html, themeList) {
  const listScript = `<script>window.__THEMES__=${JSON.stringify(themeList)};</script>`;
  const injectJS = fs.readFileSync(path.join(ROOT, 'inject.js'), 'utf-8');
  const injectScript = `<script>${injectJS}</script>`;
  const printStyle = `<meta name="viewport" content="width=device-width, initial-scale=1.0"><style>@media print{body{box-shadow:none!important;max-width:100%!important;margin:0!important;padding:0!important}#resume-nav{display:none!important}#resume-theme-overlay{display:none!important}}</style>`;
  html = html.replace('</head>', printStyle + listScript + '</head>');
  html = html.replace('</body>', injectScript + '</body>');
  return html;
}

themes.forEach(t => {
  try {
    // 每个主题单独安装（--no-package-lock 减少重写锁文件开销）
    execSync(`npm install --no-save --no-audit --no-fund --legacy-peer-deps --no-package-lock ${t.pkg}`, { stdio: 'ignore', cwd: ROOT });

    if (t.pkg === 'jsonresume-theme-even') {
      // 主页：even 主题直接渲染到 dist/index.html
      execSync('npx jsonresume-theme-even < resume.zh.json > dist/index.html', { stdio: 'inherit', cwd: ROOT });
      let html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
      html = injectInto(html, null);
      fs.writeFileSync(path.join(DIST, 'index.html'), html);
      results.push({ name: 'even', path: 'index.html' });
      builtPaths.push(path.join(DIST, 'index.html'));
      console.log('OK  (main) even');
      return;
    }

    const mod = require(t.pkg);
    const fn = (typeof mod === 'function') ? mod : (mod && mod.render);
    if (typeof fn !== 'function') throw new Error('no render()');
    let html = fn(zh);
    if (typeof html !== 'string') throw new Error('bad output');
    if (!/^\s*<!doctype|<html/i.test(html)) {
      html = '<!doctype html><html><head><meta charset="utf-8"></head><body>' + html + '</body></html>';
    }
    html = injectInto(html, null);
    const dir = path.join(DIST, 'themes', t.short);
    fs.mkdirSync(dir, { recursive: true });
    const outFile = path.join(dir, 'index.html');
    fs.writeFileSync(outFile, html);
    results.push({ name: t.short, path: `themes/${t.short}/index.html` });
    builtPaths.push(outFile);
    console.log('OK ', t.short);
  } catch (e) {
    console.log('SKIP', t.short, '->', (e.message || '').split('\n')[0].slice(0, 60));
  }
});

// 5b) 兜底：若主页 even 缺失，用第一个成功渲染的主题顶上
if (!fs.existsSync(path.join(DIST, 'index.html')) && builtPaths.length) {
  fs.copyFileSync(builtPaths[0], path.join(DIST, 'index.html'));
  results.unshift({ name: 'even', path: 'index.html' });
  console.log('⚠️ even 渲染失败，已用', path.basename(path.dirname(builtPaths[0])), '作为主页兜底');
}

// 6) 把主题清单回填进所有 HTML（导航/面板需要）
const themeList = JSON.stringify(results);
function fillList(file) {
  if (!fs.existsSync(file)) return;
  let h = fs.readFileSync(file, 'utf-8');
  h = h.replace('window.__THEMES__=null', `window.__THEMES__=${themeList}`);
  fs.writeFileSync(file, h);
}
fillList(path.join(DIST, 'index.html'));
fs.readdirSync(path.join(DIST, 'themes')).forEach(name => {
  const f = path.join(DIST, 'themes', name, 'index.html');
  fillList(f);
});

console.log(`\n✅ 构建完成：主页 + ${results.length - 1} 个主题`);
fs.writeFileSync(path.join(ROOT, 'themes-built.json'), JSON.stringify(results, null, 2));
