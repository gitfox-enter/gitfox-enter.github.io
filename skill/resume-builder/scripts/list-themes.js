#!/usr/bin/env node
/* 列出 theme_pkgs.txt 中的可用主题（供 AI 挑选模板） */
const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '../../..');
const PKGS_FILE = process.env.PKGS_FILE || path.join(REPO, 'theme_pkgs.txt');

if (!fs.existsSync(PKGS_FILE)) { console.error('找不到', PKGS_FILE); process.exit(1); }

const pkgs = fs.readFileSync(PKGS_FILE, 'utf-8').split('\n').map(s => s.trim()).filter(Boolean);
const rows = [];
pkgs.forEach(p => {
  let m = p.match(/^jsonresume-theme-(.+)$/);
  let scope = '';
  if (!m) { const sm = p.match(/^@([^/]+)\/jsonresume-theme-(.+)$/); if (sm) { scope = sm[1] + '/'; m = [null, sm[2]]; } else return; }
  rows.push({ pkg: p, name: scope + m[1] });
});

console.log(`可用主题（共 ${rows.length} 个）：\n`);
rows.forEach((r, i) => console.log(`  ${String(i + 1).padStart(2)}. ${r.name}\n      pkg: ${r.pkg}`));
console.log(`\n指定单个主题：  RESUME_THEME=${pkgs[0]} node build.js`);
console.log(`渲染全部主题：  RESUME_THEME=all node build.js`);
