import { MovieManager } from "./movieManager.js";

const movieManager = new MovieManager();

document.addEventListener("DOMContentLoaded", () => {
  movieManager.loadMovies();
  setupSearch();

  // Check for search parameter in URL
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("search");
  if (searchTerm) {
    movieManager.searchMovies(searchTerm);
  }
});

function setupSearch() {
  const searchButton = document.querySelector(".search-bar button");
  const searchInput = document.querySelector(".search-bar input");

  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
      movieManager.searchMovies(searchTerm);
    }
  });
}
