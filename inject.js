/* 简历编辑器 + 临时编辑 + 打印
   - 默认显示渲染好的简历（index.html 自身）
   - 右下角三个按钮：✏️ 编辑器 / 🖨️ 打印 / 🔗 GitHub
   - 点 ✏️ 切换到编辑器模式：左 JSON textarea + 右 iframe 预览
   - 再点 ✏️ 回到干净简历页
   - 编辑器模式下改 JSON，右侧 iframe 实时更新
   - 所有改动只在浏览器内存，不保存
*/
(function () {
  function init() {
    if (document.getElementById('resume-toolbar')) return;

    // 当前模式：view（查看） / edit（编辑器）
    var mode = 'view';

    // 保存原始页面（查看模式的完整 HTML）
    var originalHTML = document.documentElement.outerHTML;

    // 创建工具栏（三个按钮）
    var toolbar = document.createElement('div');
    toolbar.id = 'resume-toolbar';
    toolbar.style.cssText = [
      'position:fixed',
      'right:20px',
      'bottom:20px',
      'display:flex',
      'flex-direction:column',
      'gap:8px',
      'z-index:9999'
    ].join(';');

    function makeBtn(icon, title, bg) {
      var b = document.createElement('button');
      b.innerHTML = icon;
      b.title = title;
      b.style.cssText = [
        'width:48px',
        'height:48px',
        'border-radius:50%',
        'border:none',
        'background:' + (bg || '#0073aa'),
        'color:#fff',
        'font-size:18px',
        'cursor:pointer',
        'box-shadow:0 2px 8px rgba(0,0,0,0.3)',
        'transition:all 0.2s',
        'display:flex',
        'align-items:center',
        'justify-content:center'
      ].join(';');
      return b;
    }

    var editBtn = makeBtn('✏️', '切换到编辑器模式（临时编辑，不会保存）');
    var printBtn = makeBtn('🖨️', '打印简历', '#46b450');
    var githubBtn = makeBtn('🔗', 'GitHub 主页', '#24292e');
    githubBtn.onclick = function () {
      window.open('https://github.com/gitfox-enter', '_blank');
    };
    printBtn.onclick = function () {
      if (mode === 'edit') {
        // 编辑器模式下打印 iframe
        var iframe = document.getElementById('resume-preview');
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.print();
        }
      } else {
        window.print();
      }
    };

    // 当前简历数据（用于编辑器初始内容）
    var currentResumeJSON = '';

    editBtn.onclick = function () {
      if (mode === 'view') {
        // 切换到编辑器模式
        enterEditMode();
      } else {
        // 回到查看模式
        exitEditMode();
      }
    };

    function enterEditMode() {
      mode = 'edit';
      editBtn.innerHTML = '👁️';
      editBtn.title = '回到查看模式';
      editBtn.style.background = '#f0ad4e';

      // 抓取当前渲染数据
      // 尝试从页面中提取 resume.json 的内容
      fetch('./resume.json')
        .then(function (r) { return r.text(); })
        .then(function (text) {
          currentResumeJSON = text;
          renderEditorUI();
        })
        .catch(function () {
          currentResumeJSON = '{\n  "basics": {\n    "name": "金军"\n  }\n}';
          renderEditorUI();
        });
    }

    function renderEditorUI() {
      // 清空页面，构建编辑器布局
      document.head.innerHTML = '';
      document.body.innerHTML = '';

      // 注入编辑器 CSS
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

      // 顶部标题栏
      var header = document.createElement('div');
      header.className = 'editor-header';
      header.innerHTML = '<span>📝 简历编辑器 <span style="color:#888;font-size:11px;">（改动不会保存，刷新即恢复）</span></span><span class="editor-label">JSON ↔ 预览</span>';
      document.body.appendChild(header);

      // 编辑器容器
      var container = document.createElement('div');
      container.className = 'editor-container';

      // 左侧：JSON 编辑器
      var leftPane = document.createElement('div');
      leftPane.className = 'editor-pane editor-pane-left';
      var textarea = document.createElement('textarea');
      textarea.className = 'editor-textarea';
      textarea.value = currentResumeJSON;
      textarea.spellcheck = false;
      leftPane.appendChild(textarea);

      // 右侧：预览 iframe
      var rightPane = document.createElement('div');
      rightPane.className = 'editor-pane editor-pane-right';
      var iframe = document.createElement('iframe');
      iframe.className = 'editor-iframe';
      iframe.id = 'resume-preview';
      rightPane.appendChild(iframe);

      container.appendChild(leftPane);
      container.appendChild(rightPane);
      document.body.appendChild(container);

      // 重新添加工具栏
      document.body.appendChild(toolbar);

      // 实时渲染函数（带防抖）
      var renderTimer = null;
      function renderPreview() {
        try {
          var json = JSON.parse(textarea.value);
          // 用 fetch 调用本地的 resumed render 不行（需要 node）
          // 所以我们用一个简单方法：让 iframe 加载一个会调用主题的页面
          // 但纯静态没法调用 npm 包，所以我们用另一种方式：
          // iframe 直接显示 textarea 里的 JSON 解析后的文本结构
          // 真正的渲染需要 even 主题，我们没法在浏览器里直接调用
          // 折中方案：iframe 显示一个格式化的简历预览
          renderSimplePreview(json);
        } catch (e) {
          // JSON 不合法时不更新预览
        }
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

        // 基本信息
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

        // 工作经历
        if (json.work && json.work.length) {
          html += '<h2>工作经历</h2>';
          json.work.forEach(function (w) {
            html += '<div class="item"><h3>' + esc(w.position || '') + ' @ ' + esc(w.name || '') + '</h3>';
            if (w.startDate) html += '<div class="meta">' + esc(w.startDate) + (w.endDate ? ' — ' + esc(w.endDate) : ' — 至今') + '</div>';
            if (w.summary) html += '<div class="section">' + esc(w.summary) + '</div>';
            if (w.highlights && w.highlights.length) {
              html += '<ul>';
              w.highlights.forEach(function (h) { html += '<li>' + esc(h) + '</li>'; });
              html += '</ul>';
            }
            html += '</div>';
          });
        }

        // 教育经历
        if (json.education && json.education.length) {
          html += '<h2>教育经历</h2>';
          json.education.forEach(function (e) {
            html += '<div class="item"><h3>' + esc(e.institution || '') + '</h3>';
            html += '<div class="meta">' + esc(e.studyType || '') + ' · ' + esc(e.area || '') + '</div>';
            if (e.startDate) html += '<div class="meta">' + esc(e.startDate) + (e.endDate ? ' — ' + esc(e.endDate) : '') + '</div>';
            if (e.courses && e.courses.length) {
              html += '<div class="section">课程：' + e.courses.map(esc).join('、') + '</div>';
            }
            html += '</div>';
          });
        }

        // 项目
        if (json.projects && json.projects.length) {
          html += '<h2>项目</h2>';
          json.projects.forEach(function (p) {
            html += '<div class="item"><h3>' + esc(p.name || '') + '</h3>';
            if (p.description) html += '<div class="section">' + esc(p.description) + '</div>';
            if (p.url) html += '<div class="meta">🔗 ' + esc(p.url) + '</div>';
            html += '</div>';
          });
        }

        // 技能
        if (json.skills && json.skills.length) {
          html += '<h2>技能</h2>';
          json.skills.forEach(function (s) {
            html += '<div class="item"><h3>' + esc(s.name || '') + '</h3>';
            if (s.keywords && s.keywords.length) {
              html += '<div>';
              s.keywords.forEach(function (k) { html += '<span class="tag">' + esc(k) + '</span>'; });
              html += '</div>';
            }
            html += '</div>';
          });
        }

        // 语言
        if (json.languages && json.languages.length) {
          html += '<h2>语言</h2><div class="item">';
          json.languages.forEach(function (l) {
            html += '<div>' + esc(l.language || '') + ' — ' + esc(l.fluency || '') + '</div>';
          });
          html += '</div>';
        }

        // 兴趣
        if (json.interests && json.interests.length) {
          html += '<h2>兴趣</h2>';
          json.interests.forEach(function (i) {
            html += '<div class="item"><h3>' + esc(i.name || '') + '</h3>';
            if (i.keywords && i.keywords.length) {
              html += '<div>';
              i.keywords.forEach(function (k) { html += '<span class="tag">' + esc(k) + '</span>'; });
              html += '</div>';
            }
            html += '</div>';
          });
        }

        html += '</body></html>';
        iframe.srcdoc = html;
      }

      function esc(s) {
        if (s == null) return '';
        return String(s).replace(/[&<>"']/g, function (c) {
          return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
      }

      // 初始渲染
      renderPreview();

      // 输入时防抖渲染
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
      // 恢复原始页面
      document.open();
      document.write(originalHTML);
      document.close();
    }

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
