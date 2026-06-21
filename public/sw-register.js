if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      console.log('[SW] Registered:', reg.scope);
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        nw.addEventListener('statechange', () => {
          if (nw.state === 'activated' && navigator.serviceWorker.controller) {
            const b = document.createElement('div');
            b.style.cssText = 'position:fixed;bottom:1rem;left:50%;transform:translateX(-50%);background:#333;color:#fff;padding:.75rem 1.25rem;border-radius:.5rem;font-size:.875rem;z-index:9999;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.2)';
            b.textContent = '\u5185\u5bb9\u5df2\u66f4\u65b0\uff0c\u70b9\u51fb\u5237\u65b0\u9875\u9762';
            b.onclick = () => location.reload();
            document.body.appendChild(b);
            setTimeout(() => b.remove(), 10000);
          }
        });
      });
    }).catch(err => console.log('[SW] Registration failed:', err));
  });
}
