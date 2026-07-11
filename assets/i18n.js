(function () {
  var KEY = 'jz-lang';
  var lang = localStorage.getItem(KEY) || 'en';
  document.documentElement.setAttribute('data-lang', lang);

  function label(current) {
    return current === 'zh' ? 'EN' : '中文';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('langToggle');
    if (!btn) return;

    btn.textContent = label(document.documentElement.getAttribute('data-lang'));

    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-lang') === 'zh' ? 'en' : 'zh';
      document.documentElement.setAttribute('data-lang', next);
      localStorage.setItem(KEY, next);
      btn.textContent = label(next);
    });
  });
})();
