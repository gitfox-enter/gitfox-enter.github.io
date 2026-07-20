/* 简历构建脚本
   - 渲染 even 主题为站点主页 (dist/index.html)
   - 渲染全部 JSON Resume 主题为 dist/themes/<name>/index.html
   - 注入导航（🎨主题 / 🖨️打印 / 🔗GitHub）+ 主题切换面板 + 点文字直接编辑
   - 失败的的主题自动跳过
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

// 2) 读取主题包清单（来自 npm 搜索）
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

// 4) 先安装 even（主页用其 bin）
execSync('npm install --no-save --no-audit --no-fund --legacy-peer-deps jsonresume-theme-even', { stdio: 'inherit', cwd: ROOT });

// 5) 渲染每个主题
const results = []; // { name, path }

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
    if (t.pkg === 'jsonresume-theme-even') {
      // 主页：even 主题直接渲染到 dist/index.html
      execSync('npx jsonresume-theme-even < resume.zh.json > dist/index.html', { stdio: 'inherit', cwd: ROOT });
      let html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
      html = injectInto(html, null); // 先注入占位，themeList 最后统一填
      fs.writeFileSync(path.join(DIST, 'index.html'), html);
      results.push({ name: 'even', path: 'index.html' });
      console.log('OK  (main) even');
      return;
    }

    // 其他主题：npm install + require render
    execSync(`npm install --no-save --no-audit --no-fund --legacy-peer-deps ${t.pkg}`, { stdio: 'ignore', cwd: ROOT });
    const mod = require(t.pkg);
    const fn = (typeof mod === 'function') ? mod : (mod && mod.render);
    if (typeof fn !== 'function') throw new Error('no render()');
    let html = fn(zh);
    if (typeof html !== 'string') throw new Error('bad output');
      if (!/^\s*<!doctype|<html/i.test(html)) {
      html = '<!doctype html><html><head><meta charset="utf-8"></head><body>' + html + '</body></html>';
    }
    html = injectInto(html, null); // 注入导航/主题面板占位
    const dir = path.join(DIST, 'themes', t.short);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    results.push({ name: t.short, path: `themes/${t.short}/index.html` });
    console.log('OK ', t.short);
  } catch (e) {
    console.log('SKIP', t.short, '->', (e.message || '').split('\n')[0].slice(0, 60));
  }
});

// 6) 把主题清单回填进所有 HTML（导航/面板需要）
const themeList = JSON.stringify(results);
function fillList(file) {
  let h = fs.readFileSync(file, 'utf-8');
  h = h.replace('window.__THEMES__=null', `window.__THEMES__=${themeList}`);
  fs.writeFileSync(file, h);
}
fillList(path.join(DIST, 'index.html'));
fs.readdirSync(path.join(DIST, 'themes')).forEach(name => {
  const f = path.join(DIST, 'themes', name, 'index.html');
  if (fs.existsSync(f)) fillList(f);
});

console.log(`\n✅ 构建完成：主页 even + ${results.length - 1} 个主题`);
fs.writeFileSync(path.join(ROOT, 'themes-built.json'), JSON.stringify(results, null, 2));
