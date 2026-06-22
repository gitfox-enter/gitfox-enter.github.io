---
title: Hello World - 我的第一篇博客
publishDate: 2026-06-04 08:00:00
description: 用 Astro 搭建博客的全过程记录
tags:
  - 随笔
  - Astro
language: 中文
heroImage:
  src: ./cover.jpg
  color: "#6c543c"
---
## 为什么写博客

记录技术折腾的过程，方便以后回看，也分享给有需要的人。

## 技术选型

最终选择了 **Astro** 作为静态站点生成器，原因：

- 轻量快速，生成的纯 HTML 加载飞快
- 原生支持 Markdown 写作
- Content Collections 让文章管理很方便
- 部署到 GitHub Pages 零成本

## 项目结构

```
gitfox-enter.github.io/
├── src/
│   ├── content/
│   │   ├── config.ts        # 文章 schema 定义
│   │   └── blog/            # Markdown 文章
│   ├── layouts/
│   │   └── BaseLayout.astro  # 全局布局（暗色主题）
│   └── pages/
│       ├── index.astro       # 首页（文章列表）
│       ├── [post].astro      # 文章详情页
│       ├── about.astro       # 关于页
│       └── rss.xml.ts        # RSS 订阅
├── public/
│   └── favicon.svg
├── astro.config.mjs
└── package.json
```

## 怎么写文章

在 `src/content/blog/` 目录下新建 `.md` 文件，顶部加上 frontmatter：

```markdown
---
title: "文章标题"
date: "2026-06-04"
tags: ["标签1", "标签2"]
description: "一句话描述"
---

正文内容...
```

就是这么简单！

## 后续计划

- [x] 基础博客搭建
- [ ] 添加代码语法高亮
- [ ] 添加搜索功能
- [ ] 自定义域名

---

这就是我的第一篇博客，后续会持续更新。
