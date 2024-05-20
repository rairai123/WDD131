// script.js
const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menu = document.querySelector("nav");
  menu.classList.toggle("active");
}

menuButton.addEventListener("click", toggleMenu);
