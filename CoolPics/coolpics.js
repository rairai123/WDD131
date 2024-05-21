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
  const clickedImage = event.target.closest(".pictures .design_card img");
  if (!clickedImage) return;

  const imagePath = clickedImage.getAttribute("src");
  const altText = clickedImage.getAttribute("alt");

  const viewer = document.createElement("div");
  viewer.classList.add("viewer");

  const img = document.createElement("img");
  img.src = imagePath;
  img.alt = altText;

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-viewer");
  closeButton.textContent = "X";
  closeButton.addEventListener("click", closeViewer);

  viewer.appendChild(img);
  viewer.appendChild(closeButton);
  document.body.appendChild(viewer);
}

function closeViewer() {
  const viewer = document.querySelector(".viewer");
  if (viewer) {
    viewer.remove();
  }
}

document.querySelector(".pictures").addEventListener("click", viewHandler);
