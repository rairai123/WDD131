export class ReviewManager {
  constructor() {
    this.reviews = [
      {
        id: 1,
        movie: "Kingdom of the Planet of the Apes",
        content:
          "An epic continuation of the franchise. The visual effects are stunning!",
        rating: 4.5,
      },
      {
        id: 2,
        movie: "Inside Out 2",
        content:
          "Pixar does it again! A heartwarming sequel that explores even more complex emotions.",
        rating: 4.8,
      },
      {
        id: 3,
        movie: "A Quiet Place: Day One",
        content:
          "A thrilling prequel that expands the universe. Keeps you on the edge of your seat!",
        rating: 4.2,
      },
      {
        id: 4,
        movie: "The Watchers",
        content:
          "An intriguing premise, but the execution falls a bit short. Still, worth a watch for thriller fans.",
        rating: 3.5,
      },
      {
        id: 5,
        movie: "The Garfield Movie",
        content:
          "Hilarious and charming. A great adaptation of the beloved comic strip character.",
        rating: 4.0,
      },
      {
        id: 6,
        movie: "Dune: Part Two",
        content:
          "A masterpiece of sci-fi cinema. Denis Villeneuve has outdone himself with this epic conclusion.",
        rating: 4.9,
      },
      {
        id: 7,
        movie: "Madame Web",
        content:
          "An interesting take on the Spider-Verse, but it struggles to find its footing at times.",
        rating: 3.2,
      },
      {
        id: 8,
        movie: "Ghostbusters: Frozen Empire",
        content:
          "A fun addition to the Ghostbusters franchise. Great mix of nostalgia and new ideas.",
        rating: 4.1,
      },
    ];
  }

  loadReviews() {
    const reviewList = document.querySelector(".review-list");
    reviewList.innerHTML = "";
    this.reviews.forEach((review) => {
      const reviewElement = this.createReviewElement(review);
      reviewList.appendChild(reviewElement);
    });
  }

  createReviewElement(review) {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review-item");
    reviewElement.innerHTML = `
            <h3>${review.movie}</h3>
            <p>${review.content}</p>
            <div class="rating">Rating: ${review.rating}/5</div>
        `;
    return reviewElement;
  }

  addReview(movie, content, rating) {
    const newReview = {
      id: this.reviews.length + 1,
      movie,
      content,
      rating,
    };
    this.reviews.push(newReview);
    this.loadReviews();
  }

  deleteReview(id) {
    this.reviews = this.reviews.filter((review) => review.id !== id);
    this.loadReviews();
  }

  updateReview(id, updatedContent, updatedRating) {
    const reviewToUpdate = this.reviews.find((review) => review.id === id);
    if (reviewToUpdate) {
      reviewToUpdate.content = updatedContent;
      reviewToUpdate.rating = updatedRating;
      this.loadReviews();
    }
  }

  getReviewsByMovie(movieTitle) {
    return this.reviews.filter(
      (review) => review.movie.toLowerCase() === movieTitle.toLowerCase()
    );
  }

  getAverageRating(movieTitle) {
    const movieReviews = this.getReviewsByMovie(movieTitle);
    if (movieReviews.length === 0) return 0;
    const totalRating = movieReviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    return totalRating / movieReviews.length;
  }
}
