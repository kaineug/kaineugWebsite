document.addEventListener('DOMContentLoaded', () => {
  fetch('/templates/nav.html')
    .then(response => response.text())
    .then(html => {
      const navContainer = document.getElementById('nav-container');
      console.log("Responded")
      navContainer.innerHTML = html;
      console.log("navContainer.innerHTML is set to html")
    })
    .catch(error => console.error('Error loading navigation:', error));
});
