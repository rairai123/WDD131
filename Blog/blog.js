const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you. Read More...",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "****",
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
];

const bookReviewsContainer = document.querySelector(".book-reviews");

articles.forEach((article) => {
  const bookReview = document.createElement("div");
  bookReview.classList.add("book-review");

  const bookDetails = document.createElement("div");
  bookDetails.classList.add("book-details");

  const date = document.createElement("p");
  date.textContent = article.date;

  const age = document.createElement("p");
  age.textContent = article.ages;

  const genre = document.createElement("p");
  genre.textContent = article.genre;

  const rating = document.createElement("p");
  rating.innerHTML = article.stars;

  bookDetails.appendChild(date);
  bookDetails.appendChild(age);
  bookDetails.appendChild(genre);
  bookDetails.appendChild(rating);

  const bookContent = document.createElement("div");
  bookContent.classList.add("book-content");

  const title = document.createElement("h2");
  title.textContent = article.title;

  const image = document.createElement("img");
  image.src = article.imgSrc;
  image.alt = article.imgAlt;

  const description = document.createElement("p");
  description.textContent = article.description;

  bookContent.appendChild(title);
  bookContent.appendChild(image);
  bookContent.appendChild(description);

  bookReview.appendChild(bookDetails);
  bookReview.appendChild(bookContent);

  bookReviewsContainer.appendChild(bookReview);
});
