# 金军的在线简历

基于 [JSON Resume](https://jsonresume.org/) + [jsonresume-theme-even](https://github.com/rbardini/jsonresume-theme-even) 的在线简历，部署在 GitHub Pages。

## 🌐 地址
**https://gitfox-enter.github.io/**

## ✨ 功能

| 功能 | 说明 |
|---|---|
| 🌐 中英切换 | 右下角按钮，一键切换中文/英文简历 |
| ✏️ 临时编辑器 | 右下角按钮，进入左右分栏编辑器（左 JSON 右预览），改动不保存 |
| 🖨️ 打印 A4 | 右下角按钮，打印当前简历（可先编辑再打印） |
| 🔗 项目仓库 | 右下角按钮，跳转到本仓库 |
| 🌗 亮/暗模式 | 页面右上角切换 |
| 🎨 颜色可调 | 改 `resume.json` 的 `meta.themeOptions.colors` |

## 🔒 关于隐私信息（"XXX" 说明）

简历中部分敏感字段（如手机号）显示为 `XXX-XXXX-XXXX`，这是**为了保护个人隐私**的刻意处理：

- **公开版**（任何人访问看到的）：隐私字段打码为 `XXX`
- **自己打印时**：点 ✏️ 编辑器 → 把 `XXX` 改成真实信息 → 点 🖨️ 打印 → 打印完关闭页面
- **改动不保存**：编辑器里的修改只在浏览器内存中，刷新即恢复打码版，**不会泄露到 GitHub 仓库**

## 📝 怎么修改简历内容

### 方法 A：网页上直接改（GitHub 在线编辑）
1. 打开 [`resume.json`](./resume.json)
2. 点右上角 ✏️ 编辑
3. 改完 → Commit changes
4. 等 1～2 分钟，GitHub Actions 自动重建

### 方法 B：Obsidian（手机）
1. 把仓库克隆到手机
2. Obsidian 打开当 vault
3. 配 Obsidian Git 插件（GitHub 用户名 + PAT）
4. 改 `resume.json` → 停笔 1 分钟自动同步

## 📄 resume.json 结构

```json
{
  "zh": { ... },    ← 中文简历数据
  "en": { ... },    ← 英文简历数据
  "meta": {
    "themeOptions": {
      "colors": {   ← 5 种颜色，每种支持亮/暗两个值
        "background": ["#ffffff", "#191e23"],
        "accent": ["#0073aa", "#00a0d2"]
      }
    }
  }
}
```

完整 schema：https://jsonresume.org/schema/

## 🛠️ 技术栈

- **数据**：`resume.json`（JSON Resume schema，双语）
- **主题**：jsonresume-theme-even
- **构建**：GitHub Actions（自动构建中英文两份 HTML）
- **部署**：GitHub Pages（apex 域名）
- **编辑器**：纯前端 JS（`inject.js`），无需后端

## 📄 License

MIT
