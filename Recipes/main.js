import recipes from "./recipes.mjs";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const recipeContainer = document.getElementById("recipe-container");

function displayRecipes(recipesToShow) {
  recipeContainer.innerHTML = "";
  recipesToShow.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    const ratingStars = createRatingStars(recipe.rating);

    recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="tags">
                ${recipe.tags
                  .map((tag) => `<span class="tag">${tag}</span>`)
                  .join("")}
            </div>
            <h2>${recipe.name}</h2>
            <div class="rating" aria-label="Rating: ${
              recipe.rating
            } out of 5 stars">
                ${ratingStars}
            </div>
            <p class="recipe-description">${recipe.description}</p>
            <p>Cook Time: ${recipe.cookTime}</p>
            <p>Prep Time: ${recipe.prepTime}</p>
            <p>Author: ${recipe.author}</p>
        `;

    recipeContainer.appendChild(recipeCard);
  });
}

function createRatingStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return `
        ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
        ${halfStar ? '<i class="fas fa-star-half-alt"></i>' : ""}
        ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
    `;
}
function filterRecipes(searchTerm) {
  return recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      recipe.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  const filteredRecipes = filterRecipes(searchTerm);
  displayRecipes(filteredRecipes);
});

// Initial display of all recipes
displayRecipes(recipes);
