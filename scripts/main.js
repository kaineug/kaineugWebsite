document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded");
  const btn = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", function () {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("open");
  });

  nav.addEventListener("click", function (e) {
    if (
      e.target.tagName === "A" &&
      window.matchMedia("max-width:600px)").matches
    ) {
      btn.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    }
  });
});
