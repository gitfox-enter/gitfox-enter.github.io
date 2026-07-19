# 在线简历

基于 [JSON Resume](https://jsonresume.org/) + [jsonresume-theme-even](https://www.npmjs.com/package/jsonresume-theme-even) 的在线简历，部署在 GitHub Pages。

## 地址
https://gitfox-enter.github.io/

## 怎么修改
1. 编辑 `resume.json`（简历数据，所有内容都在这里）
2. 推送到 main 分支
3. GitHub Actions 自动构建并部署

## 改颜色
在 `resume.json` 的 `meta.themeOptions.colors` 里调整，每种颜色支持亮/暗两个值：
```json
"accent": ["#0073aa", "#00a0d2"]
```
- 第一个值：亮色模式
- 第二个值：暗色模式

## 打印 A4
在浏览器中打开简历页面 → `Ctrl+P`（手机用浏览器打印功能）→ 已内置打印优化样式。

## 数据格式
完整 schema 参考：https://jsonresume.org/schema/
