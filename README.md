# 简历网站 · Resume Website

一个由结构化简历数据自动生成的在线简历站点，支持**多主题模板**与**一键 GitHub Pages 部署**，并内置可在线编辑、打印、跳转源码的能力。

> 项目定位：结合 [`rbardini/jsonresume-theme-even`](https://github.com/rbardini/jsonresume-theme-even)（扁平主题 + 在线编辑/打印/GitHub 演示）与 [`jsonresume/resume-website`](https://github.com/jsonresume/resume-website)（静态简历网站生成）的思路，做成一个可复用的简历建站工具。

## 功能

- 🎨 **多主题**：内置 60+ 个 JSON Resume 社区主题，可单主题上线，也可一键生成全部主题的预览画廊（带主题切换面板）。
- ✏️ **在线编辑**：点 ✏️ 开关进入编辑，点文字直接改（默认关闭，保证链接可正常跳转）。
- 🖨️ **打印**：浏览器打印即出 PDF。
- 🔗 **跳转 GitHub**：一键查看源码仓库。
- 🚀 **GitHub Pages 部署**：推送即由 Actions 自动构建并发布。

## 快速开始

```bash
# 1. 编辑简历数据（JSON Resume 格式）
vim resume.json

# 2. 构建（默认单主题 cjean）
node build-resume.js
#    多模板画廊：  RESUME_THEME=all node build-resume.js
#    指定主题：    RESUME_THEME=jsonresume-theme-even node build-resume.js

# 3. 本地预览
python3 -m http.server -d dist 8080

# 4. 部署：推送到默认分支，Actions 自动构建并发布到 Pages
git push origin main
```

线上站点：<https://gitfox-enter.github.io/>

## 目录结构

```
resume.json              简历数据（zh / en 双语文段）
build-resume.js          构建脚本（单主题 / 多模板，由 RESUME_THEME 切换）
inject.js                单主题注入（编辑/打印/GitHub）
inject-multi.js          多模板注入（额外含主题切换面板）
theme_pkgs.txt           主题清单（一行一个 npm 包）
.github/workflows/        GitHub Pages 部署
skill/resume-builder/     AI agent skill（见下）
```

## AI agent skill

`skill/resume-builder/` 是一个可复用技能，让 AI 也能帮用户「做简历多模板 + GitHub Pages 部署」。包含：

- `SKILL.md` — 完整工作流与实现要点
- `scripts/build.js` — 自包含渲染器（单主题 / 多模板）
- `scripts/list-themes.js` — 列出可用主题
- `references/json-resume-schema.md` — 简历字段参考
- `assets/` — 示例简历、部署工作流、主题清单

把 `skill/resume-builder/` 放进任意 agent 的技能目录即可启用。

## 实现要点

- **数据清洗**：渲染前丢弃空/非法的 `url`/`image` 字段，避免 `cjean` 等严格主题因 Zod `z.url()` 校验崩溃。
- **异步主题**：`render()` 返回 Promise 的主题（如 `cjean`）会被 `await`。
- **编辑开关**：`contenteditable` 默认关闭，链接才能点；导航栏挂在 `<html>` 下、`<body>` 之外，正文可编辑不影响按钮。
- **打印样式**：隐藏导航的规则只放在 `@media print` 内，不会误伤屏幕显示。
