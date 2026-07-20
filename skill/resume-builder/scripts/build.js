/* 自包含简历渲染器（skill 便携版，逻辑与仓库根 build-resume.js 一致）
   用法：
     node build.js                         # 单主题（默认 jsonresume-theme-cjean）
     RESUME_THEME=all node build.js       # 多模板画廊
     RESUME_THEME=<pkg> node build.js     # 指定主题
   环境变量：
     RESUME_FILE   简历数据路径（默认 <repo>/resume.json）
     PKGS_FILE     主题清单路径（默认 <repo>/theme_pkgs.txt）
     RESUME_THEME  主题包名 / all
*/
const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const __DIR = __dirname;
const REPO = path.resolve(__DIR, '../../..'); // skill/resume-builder/scripts -> repo root
const ROOT = REPO;
const DIST = path.join(ROOT, 'dist');
const RESUME_FILE = process.env.RESUME_FILE || path.join(ROOT, 'resume.json');
const PKGS_FILE = process.env.PKGS_FILE || path.join(ROOT, 'theme_pkgs.txt');
const THEME = process.env.RESUME_THEME || 'jsonresume-theme-cjean';
const MULTI = THEME === 'all';

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, 'themes'), { recursive: true });

function isValidUrl(v) {
  if (typeof v !== 'string' || !v.trim()) return false;
  try { const u = new URL(v); return u.protocol === 'http:' || u.protocol === 'https:' || u.protocol === 'mailto:'; }
  catch (_) { return false; }
}
function sanitize(obj) {
  if (Array.isArray(obj)) return obj.map(sanitize);
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const k of Object.keys(obj)) {
      const v = obj[k]; const lk = String(k).toLowerCase();
      if ((lk === 'url' || lk === 'website' || lk === 'image') && typeof v === 'string') { if (!isValidUrl(v)) continue; }
      out[k] = sanitize(v);
    }
    return out;
  }
  return obj;
}

if (!fs.existsSync(RESUME_FILE)) { console.error('❌ 找不到简历数据：', RESUME_FILE); process.exit(1); }
const data = JSON.parse(fs.readFileSync(RESUME_FILE, 'utf-8'));
const section = data.zh || data.en || data;
const zh = sanitize({ ...section, meta: data.meta });
fs.writeFileSync(path.join(ROOT, 'resume.zh.json'), JSON.stringify(zh));

function injectInto(html, themeList, multi) {
  const injectJS = fs.readFileSync(path.join(ROOT, multi ? 'inject-multi.js' : 'inject.js'), 'utf-8');
  const injectScript = `<script>${injectJS}</script>`;
  const printStyle = `<meta name="viewport" content="width=device-width, initial-scale=1.0"><style>@media print{body{box-shadow:none!important;max-width:100%!important;margin:0!important;padding:0!important}#resume-nav{display:none!important}#resume-theme-overlay{display:none!important}}</style>`;
  const listScript = multi ? `<script>window.__THEMES__=${JSON.stringify(themeList)};</script>` : '';
  html = html.replace('</head>', printStyle + listScript + '</head>');
  html = html.replace('</body>', injectScript + '</body>');
  return html;
}

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
    if (html && typeof html.then === 'function') html = await html;
    if (typeof html !== 'string') throw new Error('bad output');
    if (!/^\s*<!doctype|<html/i.test(html)) html = '<!doctype html><html><head><meta charset="utf-8"></head><body>' + html + '</body></html>';
  }
  return injectInto(html, multi ? [] : null, multi);
}

function parsePkgs() {
  if (!fs.existsSync(PKGS_FILE)) return [];
  const pkgs = fs.readFileSync(PKGS_FILE, 'utf-8').split('\n').map(s => s.trim()).filter(Boolean);
  const themes = []; const seen = new Set();
  pkgs.forEach(p => {
    let m = p.match(/^jsonresume-theme-(.+)$/); let scope = '';
    if (!m) { const sm = p.match(/^@([^/]+)\/jsonresume-theme-(.+)$/); if (sm) { scope = sm[1] + '-'; m = [null, sm[2]]; } else return; }
    const short = (scope + m[1]).replace(/[^a-z0-9-]/gi, '-').toLowerCase();
    if (seen.has(short)) return; seen.add(short);
    themes.push({ pkg: p, short });
  });
  return themes;
}

async function build() {
  if (!MULTI) {
    console.log(`渲染主题：${THEME}`);
    const html = await renderOne(THEME, false);
    fs.writeFileSync(path.join(DIST, 'index.html'), html);
    console.log(`✅ 构建完成：${THEME} → dist/index.html`);
    return;
  }
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
    } catch (e) { console.log('SKIP', t.short, '->', (e.message || '').split('\n')[0].slice(0, 60)); }
  }
  if (!results.length) { console.error('❌ 没有任何主题渲染成功'); process.exit(1); }
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
}

build().catch(e => { console.error('❌ 构建失败：', e.message); process.exit(1); });
