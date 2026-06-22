---
title: 我的两个开源项目
publishDate: 2026-06-04 12:00:00
description: 介绍 gitfox 博客与站点更新监控两个开源项目
tags:
  - 开源
  - 项目
  - GitHub
language: 中文
heroImage:
  src: ./cover.jpg
  color: "#242454"
---
目前我在 GitHub 上有两个自己的项目，记录一下它们的来龙去脉。

## 1. gitfox 的博客 (gitfox-enter.github.io)

- **地址**: [gitfox-enter/gitfox-enter.github.io](https://github.com/gitfox-enter/gitfox-enter.github.io)
- **技术栈**: Astro 4.16
- **部署**: GitHub Pages (https://gitfox-enter.github.io/)

这就是你现在看到的博客。技术选型很直接：Astro 做静态博客性能优秀，Content Collections 管理文章方便，配合 GitHub Actions 实现推送到 main 分支即自动部署，零运维成本。

博客支持 RSS 订阅 (`/rss.xml`) 和 Sitemap (`/sitemap.xml`)，方便被搜索引擎收录。

## 2. 站点更新监控 (site-update-monitor)

- **地址**: [gitfox-enter/site-update-monitor](https://github.com/gitfox-enter/site-update-monitor)
- **技术栈**: HTML / Python / GitHub Actions
- **部署**: GitHub Pages

一个自动化的多站点更新监控系统。核心逻辑很简单：用 GitHub Actions 定时（每 4 小时）抓取一批关注站点的页面内容，与上次快照对比，发现更新就生成报告并发布到 GitHub Pages。

目前监控了 35 个站点，覆盖羊毛线报和免费软件两大分类。通过这个系统能高效发现感兴趣的站点更新，不用逐个手动刷新。

## 总结

两个项目都是实用导向，没有为了技术而技术。博客是输出，监控系统是输入——一个用来记录，一个用来发现。后续会持续迭代。
