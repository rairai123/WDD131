import { ReviewManager } from "./reviewManager.js";

const reviewManager = new ReviewManager();

document.addEventListener("DOMContentLoaded", () => {
  reviewManager.loadReviews();
  setupReviewForm();
});

function setupReviewForm() {
  const form = document.createElement("form");
  form.innerHTML = `
        <select id="movie-select">
            <option value="">Select a movie</option>
            <option value="Kingdom of the Planet of the Apes">Kingdom of the Planet of the Apes</option>
            <option value="Inside Out 2">Inside Out 2</option>
            <option value="A Quiet Place: Day One">A Quiet Place: Day One</option>
            <option value="The Watchers">The Watchers</option>
            <option value="The Garfield Movie">The Garfield Movie</option>
            <option value="Dune: Part Two">Dune: Part Two</option>
            <option value="Madame Web">Madame Web</option>
            <option value="Ghostbusters: Frozen Empire">Ghostbusters: Frozen Empire</option>
        </select>
        <textarea id="review-content" placeholder="Your review" required></textarea>
        <input type="number" id="rating" min="1" max="5" step="0.1" required>
        <button type="submit">Add Review</button>
    `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const movie = document.getElementById("movie-select").value;
    const content = document.getElementById("review-content").value;
    const rating = document.getElementById("rating").value;

    if (movie && content && rating) {
      reviewManager.addReview(movie, content, parseFloat(rating));
      form.reset();
    } else {
      alert("Please fill out all fields");
    }
  });

  document.querySelector("#reviews").prepend(form);
}
