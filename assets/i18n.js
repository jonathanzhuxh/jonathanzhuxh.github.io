(function () {
  var KEY = 'jz-lang';
  var lang = localStorage.getItem(KEY) || 'en';
  var root = document.documentElement;

  function apply(l) {
    root.setAttribute('data-lang', l);
    root.lang = l === 'zh' ? 'zh-CN' : 'en';
  }
  apply(lang);

  function label(current) {
    return current === 'zh' ? 'EN' : '中文';
  }
  function ariaLabel(current) {
    return current === 'zh' ? 'Switch to English' : '切换到中文';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('langToggle');
    if (!btn) return;

    function update(l) {
      btn.textContent = label(l);
      btn.setAttribute('aria-label', ariaLabel(l));
      btn.setAttribute('lang', l === 'zh' ? 'en' : 'zh-CN');
    }
    update(root.getAttribute('data-lang'));

    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-lang') === 'zh' ? 'en' : 'zh';
      apply(next);
      localStorage.setItem(KEY, next);
      update(next);
    });
  });
})();
