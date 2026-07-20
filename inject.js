/* 简历交互 —— 仿 jsonresume-theme-even 演示站 + 多主题切换/预览
   - 右下角 nav：🎨 主题 / 🖨️ 打印 / 🔗 GitHub（与官方一致的圆形原生按钮）
   - 点简历任意文字即可直接编辑（contenteditable），刷新恢复，不保存
   - 🎨 打开主题面板，点任意主题即切换并预览
*/
(function () {
  function init() {
    if (document.getElementById('resume-nav')) return;

    var themes = (window.__THEMES__ || []).map(function (t) {
      return { name: t.name, path: t.path };
    });

    // 让简历正文可编辑（点文字直接改，刷新即恢复）
    document.body.setAttribute('contenteditable', 'true');

    // ---- 右下角 nav ----
    var nav = document.createElement('nav');
    nav.id = 'resume-nav';
    nav.setAttribute('contenteditable', 'false');
    nav.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;position:fixed;right:1rem;bottom:1rem;z-index:99999';

    var childCss = 'background:ButtonFace;border:1px solid ButtonBorder;border-radius:50%;color:ButtonText;padding:.5rem;display:grid;place-items:center;cursor:pointer;text-decoration:none';

    var printSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>';
    var githubSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>';
    var themeSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/></svg>';

    var themeBtn = document.createElement('button');
    themeBtn.setAttribute('name', 'themes');
    themeBtn.setAttribute('title', '切换主题');
    themeBtn.innerHTML = themeSVG;
    themeBtn.style.cssText = childCss;
    themeBtn.onclick = toggleOverlay;

    var printBtn = document.createElement('button');
    printBtn.setAttribute('name', 'print');
    printBtn.setAttribute('title', '打印简历');
    printBtn.innerHTML = printSVG;
    printBtn.style.cssText = childCss;
    printBtn.onclick = function () { window.print(); };

    var githubLink = document.createElement('a');
    githubLink.setAttribute('href', 'https://github.com/gitfox-enter/gitfox-enter.github.io');
    githubLink.setAttribute('target', '_blank');
    githubLink.setAttribute('rel', 'noopener');
    githubLink.setAttribute('title', '在 GitHub 查看');
    githubLink.innerHTML = githubSVG;
    githubLink.style.cssText = childCss;

    [themeBtn, printBtn, githubLink].forEach(function (el) {
      el.onmouseover = function () { this.style.background = 'Canvas'; };
      el.onmouseout = function () { this.style.background = 'ButtonFace'; };
    });

    nav.appendChild(themeBtn);
    nav.appendChild(printBtn);
    nav.appendChild(githubLink);
    document.documentElement.appendChild(nav);

    // ---- 主题切换面板 ----
    var overlay = document.createElement('div');
    overlay.id = 'resume-theme-overlay';
    overlay.setAttribute('contenteditable', 'false');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:100000;display:none;overflow:auto;padding:2rem';
    overlay.onclick = function (e) { if (e.target === overlay) overlay.style.display = 'none'; };

    var panel = document.createElement('div');
    panel.style.cssText = 'max-width:900px;margin:0 auto;background:#fff;color:#191e23;border-radius:12px;padding:1.5rem;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;box-shadow:0 10px 40px rgba(0,0,0,.3)';

    var head = document.createElement('div');
    head.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem';
    head.innerHTML = '<h2 style="margin:0;font-size:20px">选择主题（点击切换 + 预览）</h2>';
    var closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = 'border:none;background:#f3f4f5;width:36px;height:36px;border-radius:50%;font-size:18px;cursor:pointer;color:#333';
    closeBtn.onclick = function () { overlay.style.display = 'none'; };
    head.appendChild(closeBtn);
    panel.appendChild(head);

    var grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px';

    var here = location.pathname;
    function isActive(t) {
      if (t.path === 'index.html') return (here === '/' || here === '/index.html');
      return here.endsWith('/' + t.path.replace(/^\//, '')) || here === t.path;
    }

    themes.forEach(function (t) {
      var card = document.createElement('button');
      card.textContent = t.name.replace(/-/g, ' ');
      var active = isActive(t);
      card.style.cssText = 'padding:14px 10px;border:1px solid ' + (active ? '#0073aa' : '#e0e0e0') + ';border-radius:8px;background:' + (active ? '#eaf4fb' : '#fff') + ';color:#191e23;cursor:pointer;font-size:14px;text-transform:capitalize;transition:all .15s';
      card.onmouseover = function () { this.style.borderColor = '#0073aa'; this.style.background = '#f0f7fc'; };
      card.onmouseout = function () { this.style.borderColor = active ? '#0073aa' : '#e0e0e0'; this.style.background = active ? '#eaf4fb' : '#fff'; };
      card.onclick = function () { location.href = t.path; };
      grid.appendChild(card);
    });
    panel.appendChild(grid);
    overlay.appendChild(panel);
    document.documentElement.appendChild(overlay);

    function toggleOverlay() {
      overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
