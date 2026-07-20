/* ==========================================================================
   EUNSEO JEONG® — shared behaviour
   Loaded by index.html and every work/<slug>/index.html detail page.
   Page-specific scripts (hero canvas, work shelf chip) stay in their page.
   ========================================================================== */
(function () {
  // Theme toggle (defaultTheme: light). Persisted across pages via localStorage,
  // so navigating index → detail keeps whatever the visitor picked.
  var btn = document.getElementById('themeToggle');

  function applyTheme(t) {
    document.body.setAttribute('data-theme', t);
    if (btn) btn.textContent = t === 'light' ? 'DARK ◑' : 'LIGHT ◐';
  }

  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  applyTheme(saved === 'dark' ? 'dark' : 'light');

  // Detail pages may omit the toggle button; the theme still applies.
  if (btn) {
    btn.addEventListener('click', function () {
      var next = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
})();
