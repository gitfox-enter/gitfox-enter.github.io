/* 简历临时编辑器
   - 右下角浮动按钮：点一下进入编辑模式，文字变可编辑
   - 再点一下退出，改动只存在浏览器内存，刷新即恢复
   - 打印时使用当前编辑后的内容
*/
(function () {
  // 等待 DOM 加载完成
  function init() {
    // 避免重复注入
    if (document.getElementById('resume-edit-toggle')) return;

    var editing = false;

    // 创建浮动按钮
    var btn = document.createElement('button');
    btn.id = 'resume-edit-toggle';
    btn.innerHTML = '✏️';
    btn.title = '点击进入编辑模式（临时编辑，不会保存）';
    btn.style.cssText = [
      'position:fixed',
      'right:20px',
      'bottom:20px',
      'width:48px',
      'height:48px',
      'border-radius:50%',
      'border:none',
      'background:#0073aa',
      'color:#fff',
      'font-size:20px',
      'cursor:pointer',
      'box-shadow:0 2px 8px rgba(0,0,0,0.3)',
      'z-index:9999',
      'transition:all 0.2s',
      'display:flex',
      'align-items:center',
      'justify-content:center'
    ].join(';');

    // 可编辑的元素选择器（覆盖 even 主题所有文本节点）
    var editableSelector = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'span', 'li', 'a', 'div',
      '.stack', '.meta', '.timeline', '.grid-list'
    ].join(',');

    function setEditable(on) {
      editing = on;
      var els = document.querySelectorAll(editableSelector);
      els.forEach(function (el) {
        // 跳过按钮自身和 SVG
        if (el.id === 'resume-edit-toggle') return;
        if (el.tagName === 'SVG') return;
        // 只让有直接文本内容的元素可编辑
        var hasDirectText = false;
        for (var i = 0; i < el.childNodes.length; i++) {
          if (el.childNodes[i].nodeType === 3 && el.childNodes[i].textContent.trim()) {
            hasDirectText = true;
            break;
          }
        }
        if (on) {
          if (hasDirectText || el.children.length === 0) {
            el.setAttribute('contenteditable', 'true');
            el.style.outline = '1px dashed rgba(0,115,170,0.5)';
            el.style.cursor = 'text';
          }
        } else {
          el.removeAttribute('contenteditable');
          el.style.outline = '';
          el.style.cursor = '';
        }
      });
      btn.innerHTML = on ? '✅' : '✏️';
      btn.style.background = on ? '#46b450' : '#0073aa';
      btn.title = on ? '点击退出编辑模式' : '点击进入编辑模式（临时编辑，不会保存）';

      // 进入/退出编辑模式时给个提示
      showToast(on ? '已进入编辑模式：点击任意文字可直接修改。改动不会保存，刷新即恢复。' : '已退出编辑模式。');
    }

    // Toast 提示
    function showToast(msg) {
      var t = document.createElement('div');
      t.textContent = msg;
      t.style.cssText = [
        'position:fixed',
        'left:50%',
        'bottom:80px',
        'transform:translateX(-50%)',
        'background:rgba(0,0,0,0.8)',
        'color:#fff',
        'padding:10px 16px',
        'border-radius:6px',
        'font-size:13px',
        'max-width:90vw',
        'z-index:9998',
        'pointer-events:none'
      ].join(';');
      document.body.appendChild(t);
      setTimeout(function () { t.remove(); }, 3500);
    }

    btn.addEventListener('click', function () {
      setEditable(!editing);
    });

    document.body.appendChild(btn);

    // 打印前确保退出编辑模式（避免虚线轮廓被打印）
    window.addEventListener('beforeprint', function () {
      if (editing) {
        // 临时移除编辑样式但保留内容
        var els = document.querySelectorAll('[contenteditable="true"]');
        els.forEach(function (el) {
          el.style.outline = '';
        });
      }
    });

    window.addEventListener('afterprint', function () {
      if (editing) {
        var els = document.querySelectorAll('[contenteditable="true"]');
        els.forEach(function (el) {
          el.style.outline = '1px dashed rgba(0,115,170,0.5)';
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
