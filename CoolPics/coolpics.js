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
  const clickedImage = event.target.closest(".pictures .design_card img");
  if (!clickedImage) return;

  // Get the source attribute of the clicked image
  const imagePath = clickedImage.getAttribute("src");

  // Split the image path on the last "/"
  const parts = imagePath.split("/");

  // Get the last part of the split array, which is the filename
  let fileName = parts[parts.length - 1];

  // Replace "-thumb" with "-full" in the filename
  fileName = fileName.replace("-thumb", "-full");

  // Reconstruct the image path with the modified filename
  const fullImagePath = parts.slice(0, -1).join("/") + "/" + fileName;

  const altText = clickedImage.getAttribute("alt");

  const viewerHTML = viewerTemplate(fullImagePath, altText);
  document.body.insertAdjacentHTML("afterbegin", viewerHTML);

  const closeButton = document.querySelector(".close-viewer");
  closeButton.addEventListener("click", closeViewer);
}

document.querySelector(".gallery").addEventListener("click", viewHandler);
