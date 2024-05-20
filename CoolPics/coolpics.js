// script.js
const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menu = document.querySelector("nav");
  menu.classList.toggle("active");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector("nav");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize(); // Call handleResize immediately when page loads
window.addEventListener("resize", handleResize); // Add event listener for window resize

function viewerTemplate(imagePath, altText) {
  return `
    <div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${imagePath}" alt="${altText}">
    </div>
  `;
}

function viewHandler(event) {
  const clickedImage = event.target.closest(".gallery img");
  if (!clickedImage) return;

  const imagePath = clickedImage.getAttribute("src").replace("-thumb", "-full");
  const altText = clickedImage.getAttribute("alt");

  const viewerHTML = viewerTemplate(imagePath, altText);
  document.body.insertAdjacentHTML("afterbegin", viewerHTML);

  const closeButton = document.querySelector(".close-viewer");
  closeButton.addEventListener("click", closeViewer);
}

function closeViewer() {
  const viewer = document.querySelector(".viewer");
  viewer.remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);
