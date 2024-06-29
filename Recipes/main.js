import recipes from "./recipes.mjs";

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function tagsTemplate(tags) {
  let html = "";
  tags.forEach((tag) => {
    html += `<li>${tag}</li>`;
  });
  return html;
}

function ratingTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
    >`;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }

  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="${recipe.name}" />
    <figcaption>
        <ul class="recipe__tags">
            ${tagsTemplate(recipe.tags)}
        </ul>
        <h2><a href="#">${recipe.name}</a></h2>
        <p class="recipe__ratings">
            ${ratingTemplate(recipe.rating)}
        </p>
        <p class="recipe__description">
            ${recipe.description}
        </p>
    </figcaption>
    </figure>`;
}


const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));


function renderRecipes(recipeList) {
  const recipeContainer = document.getElementById("recipe-container");
  const recipesHtml = recipeList
    .map((recipe) => recipeTemplate(recipe))
    .join("");
  recipeContainer.innerHTML = recipesHtml;
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

function filterRecipes(query) {
  return recipes
    .filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        recipe.recipeIngredient.some((ingredient) =>
          ingredient.toLowerCase().includes(query)
        )
    )
    .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault();
  const searchInput = document.getElementById("search-input");
  const query = searchInput.value.trim().toLowerCase();
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}


const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", searchHandler);


init();


console.log(recipeTemplate(getRandomListEntry(recipes)));
