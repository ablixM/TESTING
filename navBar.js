window.addEventListener("scroll", () => {
  const navBar = document.querySelector(".nav-bar");
  const navLinks = document.querySelector(".nav-links");
  const logo = document.querySelector(".logo");
  navBar.classList.toggle("stick", window.scrollY > 0);
  navLinks.classList.toggle("small-nav-link", window.scrollY > 0);
  logo.classList.toggle("logo-small", window.scrollY > 0);
});
