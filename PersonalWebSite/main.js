document.addEventListener("DOMContentLoaded", () => {
  setupSearch();
});

function setupSearch() {
  const searchButton = document.querySelector(".search-bar button");
  const searchInput = document.querySelector(".search-bar input");

  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
      window.location.href = `movies.html?search=${encodeURIComponent(
        searchTerm
      )}`;
    }
  });
}
