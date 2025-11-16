async function loadNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  try {
    const resp = await fetch(`/templates/nav.html`);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const html = await resp.text();
    container.innerHTML = html;
  } catch (e) {
    console.error('Failed to load navbar:', e);
    // fallback: simple text link
    container.innerHTML = `<a href="/html/index.html">Home</a>`;
  }
}

// Run as soon as the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
  loadNavbar();
}
