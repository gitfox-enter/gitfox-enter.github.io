/* 简历编辑器 + 临时编辑 + 打印 + 中英切换
   - 默认显示中文简历
   - 右下角四个按钮：🌐 中英切换 / ✏️ 编辑器 / 🖨️ 打印 / 🔗 项目仓库
   - 点 🌐 切换中英文
   - 点 ✏️ 切换到编辑器模式：左 JSON textarea + 右 iframe 预览
   - 再点 ✏️ 回到查看模式
   - 所有改动只在浏览器内存，不保存
*/
(function () {
  function init() {
    if (document.getElementById('resume-toolbar')) return;

    // 注入动画 CSS
    var animStyle = document.createElement('style');
    animStyle.textContent = [
      '@keyframes rtBounceIn{0%{opacity:0;transform:scale(0) translateY(40px)}60%{opacity:1;transform:scale(1.1) translateY(-5px)}100%{opacity:1;transform:scale(1) translateY(0)}}',
      '@keyframes rtPulse{0%,100%{box-shadow:0 3px 12px rgba(0,0,0,0.4)}50%{box-shadow:0 3px 20px rgba(0,115,170,0.6),0 0 30px rgba(0,115,170,0.3)}}',
      '#resume-toolbar button:hover{animation:rtPulse 1s infinite}'
    ].join('\n');
    document.head.appendChild(animStyle);

    var mode = 'view';
    var lang = localStorage.getItem('resume-lang') || 'zh';
    var originalHTML = document.documentElement.outerHTML;

    // 创建工具栏 —— 内联到 HTML，无外部依赖
    var toolbar = document.createElement('div');
    toolbar.id = 'resume-toolbar';
    toolbar.style.cssText = [
      'position:fixed',
      'right:16px',
      'bottom:max(16px, env(safe-area-inset-bottom) + 10px)',
      'display:flex',
      'flex-direction:column',
      'gap:8px',
      'z-index:99999',
      'animation:rtBounceIn 0.5s ease-out'
    ].join(';');

    function makeBtn(icon, title, bg) {
      var b = document.createElement('button');
      b.innerHTML = icon;
      b.title = title;
      b.style.cssText = [
        'width:56px',
        'height:56px',
        'border-radius:50%',
        'border:none',
        'background:' + (bg || '#0073aa'),
        'color:#fff',
        'font-size:20px',
        'cursor:pointer',
        'box-shadow:0 3px 12px rgba(0,0,0,0.4)',
        'transition:all 0.2s',
        'display:flex',
        'align-items:center',
        'justify-content:center'
      ].join(';');
      b.onmouseover = function () { this.style.transform = 'scale(1.15)'; };
      b.onmouseout = function () { this.style.transform = 'scale(1)'; };
      return b;
    }

    var themeBtn = makeBtn('🌓', '切换亮/暗模式', '#6c7781');
    var langBtn = makeBtn('🌐', '切换中英文', '#8e44ad');
    var editBtn = makeBtn('✏️', '切换到编辑器模式（临时编辑，不会保存）');
    var printBtn = makeBtn('🖨️', '打印简历', '#46b450');
    var githubBtn = makeBtn('🔗', '本项目仓库', '#24292e');

    // 亮暗切换
    function updateThemeBtn() {
      var isDark = localStorage.getItem('resume-theme') === 'dark';
      themeBtn.innerHTML = isDark ? '☀️' : '🌙';
      themeBtn.title = isDark ? '当前暗色模式，点击切换亮色' : '当前亮色模式，点击切换暗色';
    }

    // 初始化主题
    (function () {
      var saved = localStorage.getItem('resume-theme');
      if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else if (saved === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      }
      updateThemeBtn();
    })();

    themeBtn.onclick = function () {
      var current = localStorage.getItem('resume-theme');
      var next = (current === 'dark') ? 'light' : 'dark';
      localStorage.setItem('resume-theme', next);
      // even 主题用 CSS 变量控制颜色，我们通过修改 html 属性 + 注入 style 实现
      if (next === 'dark') {
        document.documentElement.style.setProperty('--color-background', 'var(--color-background-dark)');
        document.documentElement.style.setProperty('--color-dimmed', 'var(--color-dimmed-dark)');
        document.documentElement.style.setProperty('--color-primary', 'var(--color-primary-dark)');
        document.documentElement.style.setProperty('--color-secondary', 'var(--color-secondary-dark)');
        document.documentElement.style.setProperty('--color-accent', 'var(--color-accent-dark)');
      } else {
        document.documentElement.style.setProperty('--color-background', 'var(--color-background-light)');
        document.documentElement.style.setProperty('--color-dimmed', 'var(--color-dimmed-light)');
        document.documentElement.style.setProperty('--color-primary', 'var(--color-primary-light)');
        document.documentElement.style.setProperty('--color-secondary', 'var(--color-secondary-light)');
        document.documentElement.style.setProperty('--color-accent', 'var(--color-accent-light)');
      }
      updateThemeBtn();
    };

    githubBtn.onclick = function () {
      window.open('https://github.com/gitfox-enter/gitfox-enter.github.io', '_blank');
    };

    printBtn.onclick = function () {
      if (mode === 'edit') {
        var iframe = document.getElementById('resume-preview');
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.print();
        }
      } else {
        window.print();
      }
    };

    // 中英切换
    langBtn.onclick = function () {
      if (mode === 'edit') {
        // 编辑器模式下切换语言：重新加载对应语言的 JSON
        lang = (lang === 'zh') ? 'en' : 'zh';
        localStorage.setItem('resume-lang', lang);
        // 重新进入编辑器模式以加载新语言数据
        enterEditMode();
      } else {
        // 查看模式下切换语言：跳转到对应 HTML
        lang = (lang === 'zh') ? 'en' : 'zh';
        localStorage.setItem('resume-lang', lang);
        var target = (lang === 'zh') ? 'index.zh.html' : 'index.en.html';
        window.location.href = target;
      }
    };

    // 更新语言按钮显示
    function updateLangBtn() {
      langBtn.innerHTML = (lang === 'zh') ? '中' : 'EN';
      langBtn.title = (lang === 'zh') ? '当前中文，点击切换到英文' : 'Current: English, click for Chinese';
    }
    updateLangBtn();

    // 编辑器模式
    editBtn.onclick = function () {
      if (mode === 'view') {
        enterEditMode();
      } else {
        exitEditMode();
      }
    };

    function enterEditMode() {
      mode = 'edit';
      editBtn.innerHTML = '👁️';
      editBtn.title = '回到查看模式';
      editBtn.style.background = '#f0ad4e';

      // 加载对应语言的 resume.json
      var jsonFile = (lang === 'zh') ? './resume.zh.json' : './resume.en.json';
      // 如果分离的 JSON 文件不存在，回退到主 resume.json
      fetch(jsonFile)
        .then(function (r) {
          if (!r.ok) throw new Error('not found');
          return r.text();
        })
        .then(function (text) {
          renderEditorUI(text);
        })
        .catch(function () {
          // 回退：从主 resume.json 提取对应语言
          fetch('./resume.json')
            .then(function (r) { return r.json(); })
            .then(function (data) {
              var sub = data[lang] || data.zh || data;
              renderEditorUI(JSON.stringify(sub, null, 2));
            })
            .catch(function () {
              renderEditorUI('{\n  "basics": {\n    "name": ""\n  }\n}');
            });
        });
    }

    function renderEditorUI(jsonText) {
      document.head.innerHTML = '';
      document.body.innerHTML = '';

      var style = document.createElement('style');
      style.textContent = [
        'html, body { height: 100%; margin: 0; padding: 0; overflow: hidden; }',
        'body { display: flex; flex-direction: column; }',
        '.editor-header { background: #1e1e1e; color: #fff; padding: 8px 16px; font-size: 13px; display: flex; justify-content: space-between; align-items: center; }',
        '.editor-container { flex: 1; display: flex; overflow: hidden; }',
        '.editor-pane { flex: 1; overflow: auto; }',
        '.editor-pane-left { background: #1e1e1e; }',
        '.editor-pane-right { background: #fff; }',
        '.editor-textarea { width: 100%; height: 100%; background: #1e1e1e; color: #d4d4d4; border: none; outline: none; padding: 16px; font-family: "SF Mono", Monaco, Consolas, monospace; font-size: 13px; line-height: 1.6; resize: none; box-sizing: border-box; }',
        '.editor-iframe { width: 100%; height: 100%; border: none; }',
        '.editor-label { color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }',
        '@media (max-width: 720px) { .editor-container { flex-direction: column; } }'
      ].join('\n');
      document.head.appendChild(style);

      var header = document.createElement('div');
      header.className = 'editor-header';
      var langLabel = (lang === 'zh') ? '中文' : 'English';
      header.innerHTML = '<span>📝 简历编辑器 (' + langLabel + ') <span style="color:#888;font-size:11px;">（改动不会保存，刷新即恢复）</span></span><span class="editor-label">JSON ↔ 预览</span>';
      document.body.appendChild(header);

      var container = document.createElement('div');
      container.className = 'editor-container';

      var leftPane = document.createElement('div');
      leftPane.className = 'editor-pane editor-pane-left';
      var textarea = document.createElement('textarea');
      textarea.className = 'editor-textarea';
      textarea.value = jsonText;
      textarea.spellcheck = false;
      leftPane.appendChild(textarea);

      var rightPane = document.createElement('div');
      rightPane.className = 'editor-pane editor-pane-right';
      var iframe = document.createElement('iframe');
      iframe.className = 'editor-iframe';
      iframe.id = 'resume-preview';
      rightPane.appendChild(iframe);

      container.appendChild(leftPane);
      container.appendChild(rightPane);
      document.body.appendChild(container);
      document.body.appendChild(toolbar);

      var renderTimer = null;
      function renderPreview() {
        try {
          var json = JSON.parse(textarea.value);
          renderSimplePreview(json);
        } catch (e) {
          // JSON 不合法时不更新
        }
      }

      function esc(s) {
        if (s == null) return '';
        return String(s).replace(/[&<>"']/g, function (c) {
          return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
      }

      function renderSimplePreview(json) {
        var html = '<!doctype html><html><head><meta charset="utf-8"><style>' +
          'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #191e23; line-height: 1.6; }' +
          'h1 { margin: 0 0 4px; font-size: 28px; }' +
          'h2 { margin: 32px 0 8px; font-size: 20px; border-bottom: 2px solid #0073aa; padding-bottom: 4px; color: #0073aa; }' +
          'h3 { margin: 16px 0 4px; font-size: 16px; }' +
          '.label { color: #0073aa; font-size: 16px; font-weight: 600; margin: 0 0 8px; }' +
          '.contact { color: #6c7781; font-size: 14px; margin: 4px 0; }' +
          '.section { margin: 4px 0 12px; }' +
          '.item { margin: 12px 0; padding-left: 12px; border-left: 3px solid #f3f4f5; }' +
          '.meta { color: #6c7781; font-size: 13px; }' +
          'ul { margin: 4px 0; padding-left: 20px; }' +
          'li { margin: 2px 0; }' +
          '.tag { display: inline-block; background: #f3f4f5; padding: 2px 8px; border-radius: 3px; font-size: 12px; margin: 2px; }' +
          '.summary { background: #f3f4f5; padding: 12px; border-radius: 6px; margin: 12px 0; }' +
          '@media print { body { margin: 0; max-width: 100%; } }' +
          '</style></head><body>';

        if (json.basics) {
          var b = json.basics;
          html += '<h1>' + esc(b.name || '') + '</h1>';
          if (b.label) html += '<div class="label">' + esc(b.label) + '</div>';
          if (b.email) html += '<div class="contact">📧 ' + esc(b.email) + '</div>';
          if (b.phone) html += '<div class="contact">📱 ' + esc(b.phone) + '</div>';
          if (b.location) {
            var loc = [b.location.city, b.location.region].filter(Boolean).join(', ');
            if (loc) html += '<div class="contact">📍 ' + esc(loc) + '</div>';
          }
          if (b.summary) html += '<div class="summary">' + esc(b.summary) + '</div>';
          if (b.profiles && b.profiles.length) {
            html += '<div class="contact">';
            b.profiles.forEach(function (p) {
              html += esc(p.network) + ': ' + esc(p.username || p.url || '') + ' ';
            });
            html += '</div>';
          }
        }

        var sections = [
          { key: 'work', title: { zh: '工作经历', en: 'Experience' } },
          { key: 'education', title: { zh: '教育经历', en: 'Education' } },
          { key: 'projects', title: { zh: '项目', en: 'Projects' } },
          { key: 'skills', title: { zh: '技能', en: 'Skills' } },
          { key: 'languages', title: { zh: '语言', en: 'Languages' } },
          { key: 'interests', title: { zh: '兴趣', en: 'Interests' } }
        ];

        sections.forEach(function (sec) {
          if (json[sec.key] && json[sec.key].length) {
            html += '<h2>' + (sec.title[lang] || sec.title.zh) + '</h2>';
            json[sec.key].forEach(function (item) {
              html += '<div class="item">';
              if (sec.key === 'work') {
                html += '<h3>' + esc(item.position || '') + ' @ ' + esc(item.name || '') + '</h3>';
                if (item.startDate) html += '<div class="meta">' + esc(item.startDate) + (item.endDate ? ' — ' + esc(item.endDate) : (lang === 'zh' ? ' — 至今' : ' — Present')) + '</div>';
                if (item.summary) html += '<div class="section">' + esc(item.summary) + '</div>';
                if (item.highlights && item.highlights.length) {
                  html += '<ul>';
                  item.highlights.forEach(function (h) { html += '<li>' + esc(h) + '</li>'; });
                  html += '</ul>';
                }
              } else if (sec.key === 'education') {
                html += '<h3>' + esc(item.institution || '') + '</h3>';
                html += '<div class="meta">' + esc(item.studyType || '') + ' · ' + esc(item.area || '') + '</div>';
                if (item.startDate) html += '<div class="meta">' + esc(item.startDate) + (item.endDate ? ' — ' + esc(item.endDate) : '') + '</div>';
                if (item.courses && item.courses.length) {
                  html += '<div class="section">' + (lang === 'zh' ? '课程：' : 'Courses: ') + item.courses.map(esc).join('、') + '</div>';
                }
              } else if (sec.key === 'projects') {
                html += '<h3>' + esc(item.name || '') + '</h3>';
                if (item.description) html += '<div class="section">' + esc(item.description) + '</div>';
                if (item.url) html += '<div class="meta">🔗 ' + esc(item.url) + '</div>';
              } else if (sec.key === 'skills') {
                html += '<h3>' + esc(item.name || '') + '</h3>';
                if (item.keywords && item.keywords.length) {
                  html += '<div>';
                  item.keywords.forEach(function (k) { html += '<span class="tag">' + esc(k) + '</span>'; });
                  html += '</div>';
                }
              } else if (sec.key === 'languages') {
                html += '<div>' + esc(item.language || '') + ' — ' + esc(item.fluency || '') + '</div>';
              } else if (sec.key === 'interests') {
                html += '<h3>' + esc(item.name || '') + '</h3>';
                if (item.keywords && item.keywords.length) {
                  html += '<div>';
                  item.keywords.forEach(function (k) { html += '<span class="tag">' + esc(k) + '</span>'; });
                  html += '</div>';
                }
              }
              html += '</div>';
            });
          }
        });

        html += '</body></html>';
        iframe.srcdoc = html;
      }

      renderPreview();
      textarea.addEventListener('input', function () {
        clearTimeout(renderTimer);
        renderTimer = setTimeout(renderPreview, 200);
      });
    }

    function exitEditMode() {
      mode = 'view';
      editBtn.innerHTML = '✏️';
      editBtn.title = '切换到编辑器模式（临时编辑，不会保存）';
      editBtn.style.background = '#0073aa';
      document.open();
      document.write(originalHTML);
      document.close();
    }

    // 根据当前页面自动检测语言
    var path = window.location.pathname;
    if (path.indexOf('index.en.html') !== -1) {
      lang = 'en';
      localStorage.setItem('resume-lang', 'en');
    } else if (path.indexOf('index.zh.html') !== -1 || path === '/' || path.indexOf('index.html') !== -1) {
      lang = 'zh';
      localStorage.setItem('resume-lang', 'zh');
    } else {
      lang = localStorage.getItem('resume-lang') || 'zh';
    }
    updateLangBtn();

    // 如果当前语言和页面语言不匹配，跳转
    var currentLangIsEn = path.indexOf('index.en.html') !== -1;
    if (lang === 'en' && !currentLangIsEn && path !== '/') {
      // 不自动跳转，避免循环
    }

    toolbar.appendChild(themeBtn);
    toolbar.appendChild(langBtn);
    toolbar.appendChild(editBtn);
    toolbar.appendChild(printBtn);
    toolbar.appendChild(githubBtn);
    document.body.appendChild(toolbar);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
