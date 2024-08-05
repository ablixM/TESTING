const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const navBar = document.querySelector(".nav-bar");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navBar.classList.toggle("active");
  showcase.classList.toggle("active");
});
