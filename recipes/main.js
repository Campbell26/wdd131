import recipes from './recipes.mjs';

// 1. Random number function
function random(num) {
  return Math.floor(Math.random() * num);
}

// 2. Get random entry from list
function getRandomListEntry(list) {
  return list[random(list.length)];
}

// 3. Template for tags
function tagsTemplate(tags) {
  return `<ul class="recipe__tags">
    ${tags.map(tag => `<li>${tag}</li>`).join('')}
  </ul>`;
}

// 4. Template for rating stars
function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += `<span aria-hidden="true" class="${i <= Math.round(rating) ? 'icon-star' : 'icon-star-empty'}">${i <= Math.round(rating) ? '⭐' : '☆'}</span>`;
  }
  html += `</span>`;
  return html;
}

// 5. Main recipe card template
function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="image of ${recipe.name}" />
    <figcaption>
      ${tagsTemplate(recipe.tags)}
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

// 6. Render function for one or more recipes
function renderRecipes(recipeList) {
  const out = document.getElementById('recipes-list');
  out.innerHTML = recipeList.map(recipeTemplate).join('');
}

// 7. Init function to show random recipe on load
function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}
init();

// 8. Filtering logic
function filterRecipes(query) {
  let filtered = recipes.filter(recipe => {
    query = query.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
      recipe.recipeIngredient.find(ing => ing.toLowerCase().includes(query))
    );
  });
  // Sort alphabetically by name
  filtered.sort((a, b) => a.name.localeCompare(b.name));
  return filtered;
}

// 9. Search handler
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const searchInput = document.getElementById('search');
  const query = searchInput.value.trim().toLowerCase();
  const filtered = filterRecipes(query);
  renderRecipes(filtered);
});
