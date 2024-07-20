export class MovieManager {
  constructor() {
    this.movies = [
      {
        id: 1,
        title: "Kingdom of the Planet of the Apes",
        image: "KingKingdom-of-the-Planet-of-the-Apes-poster.jpg",
        video: "XtFI7SNtVpY",
      },
      {
        id: 2,
        title: "Inside Out 2",
        image: "inside_out_2.avif",
        video: "L4DrolmDxmw",
      },
      {
        id: 3,
        title: "A Quiet Place: Day One",
        image: "quiet_place_day_one.avif",
        video: "YPY7J-flzE8",
      },
      {
        id: 4,
        title: "The Watchers",
        image: "the_watchers.avif",
        video: "dYo91Fq9tKY",
      },
      {
        id: 5,
        title: "The Garfield Movie",
        image: "garfield_movie.webp",
        video: "S3XjsSvwSuU",
      },
      {
        id: 6,
        title: "Dune: Part Two",
        image: "dune_2.jpeg",
        video: "U2Qp5pL3ovA",
      },
      {
        id: 7,
        title: "Madame Web",
        image: "madame_web.jpg",
        video: "s_76M4c4LTo",
      },
      {
        id: 8,
        title: "Ghostbusters: Frozen Empire",
        image: "ghostbusters_frozen_empire.jpg",
        video: "wFNK_KEmcWs",
      },
    ];
  }

  loadMovies() {
    const movieGrid = document.querySelector(".movie-grid");
    movieGrid.innerHTML = "";
    this.movies.forEach((movie) => {
      const movieElement = this.createMovieElement(movie);
      movieGrid.appendChild(movieElement);
    });
  }

  createMovieElement(movie) {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-item");
    movieElement.innerHTML = `
        <img src="images/${movie.image}" alt="${movie.title}">
        <div class="video-container" data-video-id="${movie.video}"></div>
        <p>${movie.title}</p>
    `;

    const videoContainer = movieElement.querySelector(".video-container");

    movieElement.addEventListener("mouseenter", () => {
      this.loadYouTubeVideo(videoContainer, movie.video);
    });

    movieElement.addEventListener("mouseleave", () => {
      videoContainer.innerHTML = "";
    });

    return movieElement;
  }

  loadYouTubeVideo(container, videoId) {
    container.innerHTML = `
        <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen
        ></iframe>
    `;
  }

  searchMovies(searchTerm) {
    const filteredMovies = this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.displayMovies(filteredMovies);
  }

  displayMovies(movies) {
    const movieGrid = document.querySelector(".movie-grid");
    movieGrid.innerHTML = "";
    movies.forEach((movie) => {
      const movieElement = this.createMovieElement(movie);
      movieGrid.appendChild(movieElement);
    });
  }

  getMovieById(id) {
    return this.movies.find((movie) => movie.id === id);
  }

  addMovie(title, image, video) {
    const newMovie = {
      id: this.movies.length + 1,
      title,
      image,
      video,
    };
    this.movies.push(newMovie);
    this.loadMovies();
  }

  updateMovie(id, updatedMovie) {
    const index = this.movies.findIndex((movie) => movie.id === id);
    if (index !== -1) {
      this.movies[index] = { ...this.movies[index], ...updatedMovie };
      this.loadMovies();
    }
  }

  deleteMovie(id) {
    this.movies = this.movies.filter((movie) => movie.id !== id);
    this.loadMovies();
  }
}
