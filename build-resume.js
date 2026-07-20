/* 简历构建脚本（单主题版）
   - 读取 resume.json，提取中文数据并清洗（丢弃非法 url/image 字段）
   - 渲染选定主题（默认 jsonresume-theme-cjean）为 dist/index.html
   - 注入导航：✏️ 编辑（开关）/ 🖨️ 打印 / 🔗 GitHub
   - 主题可通过环境变量 RESUME_THEME 覆盖（供 AI skill 复用，实现多模板）
*/
const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const THEME = process.env.RESUME_THEME || 'jsonresume-theme-cjean';

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

// 0) 清洗简历数据：严格主题会用 Zod 校验 url/image 为合法 URL，
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
        if (!isValidUrl(v)) continue; // 丢弃非法/空 URL，避免严格主题校验崩溃
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

// 2) 注入脚本
function injectInto(html) {
  const injectJS = fs.readFileSync(path.join(ROOT, 'inject.js'), 'utf-8');
  const injectScript = `<script>${injectJS}</script>`;
  const printStyle = `<meta name="viewport" content="width=device-width, initial-scale=1.0"><style>@media print{body{box-shadow:none!important;max-width:100%!important;margin:0!important;padding:0!important}#resume-nav{display:none!important}}</style>`;
  html = html.replace('</head>', printStyle + '</head>');
  html = html.replace('</body>', injectScript + '</body>');
  return html;
}

// 3) 安装并渲染选定主题
async function build() {
  console.log(`渲染主题：${THEME}`);
  execSync(`npm install --no-save --no-audit --no-fund --legacy-peer-deps --no-package-lock ${THEME}`, { stdio: 'inherit', cwd: ROOT });

  let html;
  if (THEME === 'jsonresume-theme-even') {
    execSync('npx jsonresume-theme-even < resume.zh.json > dist/index.html', { stdio: 'inherit', cwd: ROOT });
    html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
  } else {
    const mod = require(THEME);
    const fn = (typeof mod === 'function') ? mod : (mod && mod.render);
    if (typeof fn !== 'function') throw new Error('no render()');
    html = fn(zh);
    if (html && typeof html.then === 'function') html = await html; // 支持异步主题（如 cjean）
    if (typeof html !== 'string') throw new Error('bad output');
    if (!/^\s*<!doctype|<html/i.test(html)) {
      html = '<!doctype html><html><head><meta charset="utf-8"></head><body>' + html + '</body></html>';
    }
  }
  html = injectInto(html);
  fs.writeFileSync(path.join(DIST, 'index.html'), html);
  console.log(`✅ 构建完成：${THEME} → dist/index.html`);
}

build().catch(e => {
  console.error('❌ 构建失败：', e.message);
  process.exit(1);
});
