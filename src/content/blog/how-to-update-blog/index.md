---
title: 如何更新博客 - 手把手教程
publishDate: 2026-06-22 09:00:00
description: 从零开始，教你如何在自己的 Astro 博客上发布和更新文章，不需要任何技术背景
tags:
  - 教程
  - 博客
  - GitHub
language: 中文
---

## 前言

这篇教程写给和我一样不是程序员的朋友。我会用最通俗的语言，告诉你怎么在自己的博客上发文章。

**你需要准备的东西：**
- 一台电脑（Windows / Mac 都行）
- 一个 GitHub 账号（你已经有了）
- 一个能上网的浏览器

---

## 第一步：下载你的博客到电脑上

### 1.1 安装 Git（只需要做一次）

Git 是一个"版本管理工具"，你可以把它理解成**博客的搬运工**。

**Windows 用户：**
1. 打开浏览器，访问 https://git-scm.com/download/win
2. 点击下载，一路"下一步"安装即可

**Mac 用户：**
1. 打开"终端"（在启动台搜索"终端"）
2. 输入 `git --version`，如果提示安装，点"安装"

### 1.2 安装 VS Code 编辑器（推荐）

VS Code 是一个免费的文本编辑器，写文章很方便。

1. 访问 https://code.visualstudio.com/
2. 下载安装

### 1.3 把博客下载到电脑

打开终端（Windows 打开 "Git Bash"，Mac 打开"终端"），输入：

```bash
# 把博客下载到桌面
cd ~/Desktop
git clone https://github.com/gitfox-enter/gitfox-enter.github.io.git
```

下载完成后，你的桌面上会多出一个 `gitfox-enter.github.io` 文件夹。

---

## 第二步：写一篇新文章

### 2.1 创建文章文件夹

在 `gitfox-enter.github.io/src/content/blog/` 目录下，**新建一个文件夹**。

文件夹命名规则：
- 用英文小写
- 用 `-` 连接单词
- 例如：`my-trip-to-tibet`、`book-review-三体`

### 2.2 写文章内容

在你新建的文件夹里，创建一个叫 `index.md` 的文件，用 VS Code 打开。

文章的格式是这样的：

```markdown
---
title: 我的西藏之旅
publishDate: 2026-06-22 10:00:00
description: 一次难忘的高原旅行记录
tags:
  - 旅行
  - 西藏
language: 中文
---

这是文章的正文内容。

## 第一天

今天到达了拉萨……

## 第二天

去了布达拉宫……
```

### 2.3 什么是 "frontmatter"？

文章开头那堆 `---` 包裹的内容叫 **frontmatter**，就是文章的"身份证"：

| 字段 | 意思 | 必填吗 |
|------|------|--------|
| `title` | 文章标题 | ✅ 必填 |
| `publishDate` | 发布日期 | ✅ 必填 |
| `description` | 一句话描述 | ✅ 建议填 |
| `tags` | 标签（分类用） | 可选 |
| `language` | 语言 | 可选 |
| `heroImage` | 封面图片 | 可选 |

### 2.4 怎么加图片？

**方法一：本地图片（推荐）**

1. 把图片文件（如 `photo.jpg`）放到和 `index.md` **同一个文件夹**里
2. 在文章中这样写：

```markdown
![这是图片描述](./photo.jpg)
```

**方法二：网络图片**

直接用图片的网址：

```markdown
![这是图片描述](https://example.com/photo.jpg)
```

---

## 第三步：发布文章到网站

写好文章后，需要"上传"到 GitHub，网站才会更新。

### 3.1 打开终端，进入博客目录

```bash
cd ~/Desktop/gitfox-enter.github.io
```

### 3.2 检查你改了什么

```bash
git status
```

你会看到类似这样的输出：

```
Untracked files:
  src/content/blog/my-trip-to-tibet/
```

这说明你新增了一个文章文件夹。

### 3.3 把改动"打包"

```bash
git add .
```

这个命令的意思是：**把我所有的改动都打包好**。

### 3.4 给打包写个说明

```bash
git commit -m "新增文章：我的西藏之旅"
```

`-m` 后面的文字是说明，写什么都行，建议写清楚你做了什么。

### 3.5 上传到 GitHub

```bash
git push origin main
```

这一步会要求你输入 GitHub 的用户名和密码。

> **注意**：GitHub 现在不接受直接输密码，需要用 **Personal Access Token**。
> 
> 获取方法：
> 1. 打开 https://github.com/settings/tokens
> 2. 点击 "Generate new token (classic)"
> 3. 勾选 `repo` 权限
> 4. 生成后复制那串 `ghp_` 开头的代码
> 5. 在终端里粘贴这串代码代替密码

### 3.6 等待部署

上传成功后，GitHub Actions 会自动帮你部署网站。大约 **2-5 分钟**后，刷新你的博客页面就能看到新文章了！

---

## 第四步：更新已有文章

如果想修改已经发布的文章：

1. 找到文章所在的文件夹
2. 直接编辑 `index.md` 文件
3. 重复第三步的 3.2 → 3.5

---

## 常见问题

### Q：我 push 的时候报错 "Authentication failed"？

**A**：你的 Token 过期了或者权限不够。去 GitHub 重新生成一个，记得勾选 `repo` 权限。

### Q：图片显示不出来？

**A**：检查两点：
1. 图片文件是不是和 `index.md` 在同一个文件夹
2. 引用路径是不是写的 `./图片名.jpg`（注意那个点和斜杠）

### Q：文章发布后网站没更新？

**A**：等 5 分钟再看看。如果还没更新，去 GitHub 仓库页面点击 "Actions" 标签，看看有没有报错。

### Q：怎么删除一篇文章？

**A**：删掉对应的文件夹，然后 commit + push：

```bash
git add .
git commit -m "删除文章：xxx"
git push origin main
```

### Q：frontmatter 里的日期格式是什么？

**A**：格式是 `YYYY-MM-DD HH:MM:SS`，例如 `2026-06-22 10:00:00`。

---

## 快速参考（复制粘贴用）

### 发布新文章的完整流程

```bash
# 1. 进入博客目录
cd ~/Desktop/gitfox-enter.github.io

# 2. 打包所有改动
git add .

# 3. 写说明
git commit -m "新增文章：你的文章标题"

# 4. 上传
git push origin main
```

### 转载文章的模板

```markdown
---
title: 文章标题
publishDate: 2026-06-22 10:00:00
author: 原作者名
description: 一句话描述这篇文章
tags:
  - 标签1
  - 标签2
language: 中文
---

文章正文内容...

![插图](./image.jpg)
```

---

## 写在最后

写博客最重要的不是技术，而是**坚持记录**。哪怕只是几句话，也是属于你自己的思考。

祝写作愉快！ ✍️
