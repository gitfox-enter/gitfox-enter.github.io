/* 简历交互 —— 模仿 jsonresume-theme-even 官方演示站 (rbrd.in)
   - 右下角 nav：🖨️ 打印 + 🔗 GitHub（与官方一致的圆形原生按钮）
   - 点简历任意文字即可直接编辑（contenteditable），刷新恢复，不保存
*/
(function () {
  function init() {
    if (document.getElementById('resume-nav')) return;

    // 让简历正文可编辑（点文字直接改，刷新即恢复）
    document.body.setAttribute('contenteditable', 'true');

    // 创建 nav（与官方演示站一致：右下角，圆形原生按钮）
    var nav = document.createElement('nav');
    nav.id = 'resume-nav';
    nav.setAttribute('contenteditable', 'false'); // nav 本身不参与编辑
    nav.style.cssText = [
      'display:flex',
      'flex-direction:column',
      'gap:.5rem',
      'position:fixed',
      'right:1rem',
      'bottom:1rem',
      'z-index:99999'
    ].join(';');

    // 打印机 SVG（与官方一致）
    var printSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>';

    // GitHub SVG（与官方一致）
    var githubSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>';

    // nav 子元素统一样式（与官方一致：原生按钮配色、圆形）
    var childCss = [
      'background:ButtonFace',
      'border:1px solid ButtonBorder',
      'border-radius:50%',
      'color:ButtonText',
      'padding:.5rem',
      'display:grid',
      'place-items:center',
      'cursor:pointer',
      'text-decoration:none'
    ].join(';');

    var printBtn = document.createElement('button');
    printBtn.setAttribute('name', 'print');
    printBtn.setAttribute('aria-label', '打印简历');
    printBtn.setAttribute('title', '打印简历');
    printBtn.innerHTML = printSVG;
    printBtn.style.cssText = childCss;
    printBtn.onclick = function () { window.print(); };

    var githubLink = document.createElement('a');
    githubLink.setAttribute('href', 'https://github.com/gitfox-enter/gitfox-enter.github.io');
    githubLink.setAttribute('target', '_blank');
    githubLink.setAttribute('rel', 'noopener');
    githubLink.setAttribute('aria-label', '在 GitHub 查看');
    githubLink.setAttribute('title', '在 GitHub 查看');
    githubLink.innerHTML = githubSVG;
    githubLink.style.cssText = childCss;

    // 悬停效果（与官方一致）
    [printBtn, githubLink].forEach(function (el) {
      el.onmouseover = function () { this.style.background = 'Canvas'; };
      el.onmouseout = function () { this.style.background = 'ButtonFace'; };
    });

    nav.appendChild(printBtn);
    nav.appendChild(githubLink);
    document.body.appendChild(nav);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
