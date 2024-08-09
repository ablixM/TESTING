window.addEventListener("scroll", () => {
  const navBar = document.querySelector(".nav-bar");
  const navLinks = document.querySelector(".nav-links");

  const logo = document.querySelector(".logo");
  navBar.classList.toggle("stick", window.scrollY > 0);
  navLinks.classList.toggle("small-nav-link", window.scrollY > 0);
  logo.classList.toggle("logo-small", window.scrollY > 0);
});

// script.js
window.addEventListener("load", () => {
  const containerDiv = document.querySelector(".links");
  const links = containerDiv.querySelectorAll("a");

  // Set initial color to white
  links.forEach((link) => {
    link.style.color = "white";
  });

  // Listen for scroll events
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      // Check if the page has been scrolled
      links.forEach((link) => {
        link.style.color = "black"; // Change color to black on scroll
      });
    } else {
      links.forEach((link) => {
        link.style.color = "white"; // Revert color to white when at the top
      });
    }
  });
});
