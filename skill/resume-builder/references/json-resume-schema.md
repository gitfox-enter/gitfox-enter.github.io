# JSON Resume Schema（速查）

简历数据是一个 JSON 对象，顶层键即各版块。本 skill 读取 `resume.json` 中的 `zh`（中文）或 `en`（英文）字段。

> 关键约束：所有 `url` / `website` / `image` 字段必须是**合法完整 URL**（`https://...`），空字符串 `""` 会让 `cjean` 等主题因 Zod 校验崩溃。构建脚本会自动清洗空/非法值，但你构造数据时也应尽量给真实 URL。

## 顶层结构

```jsonc
{
  "basics": { ... },        // 必填：姓名、联系方式
  "work": [ ... ],          // 工作经历
  "volunteer": [ ... ],     // 志愿/社会实践
  "education": [ ... ],     // 教育
  "skills": [ ... ],        // 技能
  "projects": [ ... ],      // 项目
  "awards": [ ... ],        // 获奖
  "languages": [ ... ],     // 语言
  "interests": [ ... ]      // 兴趣
}
```

## basics

```jsonc
"basics": {
  "name": "金军",
  "label": "一句话头衔",
  "image": "https://.../avatar.jpg",   // 合法 URL，可省略
  "email": "you@example.com",
  "phone": "+86 138-0000-0000",
  "url": "https://yoursite.com",        // 合法 URL
  "summary": "个人简介…",
  "location": { "city": "合肥", "region": "安徽", "countryCode": "CN" },
  "profiles": [ { "network": "GitHub", "username": "gitfox-enter", "url": "https://github.com/gitfox-enter" } ]
}
```

## work / volunteer / education / projects（数组项）

```jsonc
"work": [{
  "name": "公司/单位名",
  "position": "职位",
  "url": "https://company.com",   // 合法 URL，可省略
  "startDate": "2024-09-01",
  "endDate": "2025-03-01",        // 至今可省略或 "Present"
  "summary": "一句话职责",
  "highlights": [ "成果1", "成果2" ]
}]
```

```jsonc
"education": [{
  "institution": "学校名",
  "url": "https://school.edu",
  "area": "专业",
  "studyType": "本科/硕士",
  "startDate": "2021-09-01",
  "endDate": "2025-07-01",
  "score": "GPA 3.8",
  "courses": [ "课程1", "课程2" ]
}]
```

```jsonc
"projects": [{
  "name": "项目名",
  "description": "项目说明",
  "url": "https://...",
  "type": "实训/开源",
  "startDate": "2025-12-01",
  "roles": ["角色"],
  "keywords": ["技术栈"],
  "summary": "…"
}]
```

## skills / awards / languages / interests

```jsonc
"skills": [{
  "name": "专业技能",
  "level": "",                 // 部分主题要求枚举值；留空通常安全
  "keywords": ["服务管理", "Docker"]
}]
"awards": [{ "title": "奖项", "date": "2025-06", "awarder": "颁发方", "summary": "…" }]
"languages": [{ "language": "中文", "fluency": "母语" }]
"interests": [{ "name": "自托管", "keywords": ["NAS", "Docker"] }]
```

## 中文简历常用版块

酒店管理/学生简历推荐版块顺序：`basics → work → volunteer → education → skills → projects → awards → languages → interests`。参考 `assets/sample-resume.json`。
