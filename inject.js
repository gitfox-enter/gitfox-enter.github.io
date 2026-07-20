/* 简历交互 —— 仿 jsonresume-theme-even 演示站（极简版）
   - 右下角 nav：✏️ 编辑（开关）/ 🖨️ 打印 / 🔗 GitHub（跳转仓库）
   - 编辑默认关闭：所有链接正常跳转；点 ✏️ 才让正文可编辑（点文字直接改）
   - 导航栏挂在 <html> 下、<body> 之外，正文 contenteditable 不影响按钮
*/
(function () {
  function init() {
    if (document.getElementById('resume-nav')) return;

    // nav 挂在 documentElement（<html>）下，处于可编辑区域之外，按钮永远可点
    var nav = document.createElement('nav');
    nav.id = 'resume-nav';
    nav.setAttribute('contenteditable', 'false');
    nav.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;position:fixed;right:1rem;bottom:1rem;z-index:99999';

    var childCss = 'background:ButtonFace;border:1px solid ButtonBorder;border-radius:50%;color:ButtonText;padding:.5rem;display:grid;place-items:center;cursor:pointer;text-decoration:none';

    var editSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path></svg>';
    var printSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>';
    var githubSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>';

    // 📝 JSON 编辑器（方案 C：跳转 /editor.html，左侧填 JSON 右侧实时预览）
    var jsonEditLink = document.createElement('a');
    jsonEditLink.setAttribute('href', '/editor.html');
    jsonEditLink.setAttribute('target', '_blank');
    jsonEditLink.setAttribute('rel', 'noopener');
    jsonEditLink.setAttribute('title', 'JSON 编辑器（左填 JSON · 右实时预览）');
    jsonEditLink.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>';
    jsonEditLink.style.cssText = childCss;

    // ✏️ 编辑：切换正文 contenteditable（默认关闭，链接可点）
    var editing = false;
    var editBtn = document.createElement('button');
    editBtn.setAttribute('name', 'edit');
    editBtn.setAttribute('title', '编辑简历');
    editBtn.innerHTML = editSVG;
    editBtn.style.cssText = childCss;
    editBtn.onclick = function () {
      editing = !editing;
      document.body.setAttribute('contenteditable', editing ? 'true' : 'false');
      editBtn.style.background = editing ? '#0073aa' : 'ButtonFace';
      editBtn.style.color = editing ? '#fff' : 'ButtonText';
      editBtn.title = editing ? '完成编辑' : '编辑简历';
      document.body.focus();
    };

    // 🖨️ 打印
    var printBtn = document.createElement('button');
    printBtn.setAttribute('name', 'print');
    printBtn.setAttribute('title', '打印简历');
    printBtn.innerHTML = printSVG;
    printBtn.style.cssText = childCss;
    printBtn.onclick = function () { window.print(); };

    // 🔗 GitHub 跳转仓库
    var githubLink = document.createElement('a');
    githubLink.setAttribute('href', 'https://github.com/gitfox-enter/gitfox-enter.github.io');
    githubLink.setAttribute('target', '_blank');
    githubLink.setAttribute('rel', 'noopener');
    githubLink.setAttribute('title', '在 GitHub 查看源码');
    githubLink.innerHTML = githubSVG;
    githubLink.style.cssText = childCss;

    [jsonEditLink, editBtn, printBtn, githubLink].forEach(function (el) {
      el.onmouseover = function () { if (el !== editBtn || !editing) this.style.background = 'Canvas'; };
      el.onmouseout = function () { if (el !== editBtn || !editing) this.style.background = 'ButtonFace'; };
    });

    nav.appendChild(jsonEditLink);
    nav.appendChild(editBtn);
    nav.appendChild(printBtn);
    nav.appendChild(githubLink);
    document.documentElement.appendChild(nav);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
