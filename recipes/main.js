import recipes from './recipes.mjs';

const recipeList = document.getElementById('recipes-list');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search');

function renderRecipes(recipesToRender) {
  recipeList.innerHTML = '';
  recipesToRender.forEach(recipe => {
    // Recipe Card
    const card = document.createElement('div');
    card.className = 'recipe-card';

    // Image
    const img = document.createElement('img');
    img.src = recipe.image;
    img.alt = recipe.name;
    img.className = 'recipe-img';
    card.appendChild(img);

    // Tags
    const tagList = document.createElement('div');
    tagList.className = 'recipe-tags';
    recipe.tags.forEach(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.className = 'recipe-tag';
      tagSpan.textContent = tag;
      tagList.appendChild(tagSpan);
    });
    card.appendChild(tagList);

    // Title
    const title = document.createElement('div');
    title.className = 'recipe-title';
    title.textContent = recipe.name;
    card.appendChild(title);

    // Rating
    const rating = document.createElement('span');
    rating.className = 'rating';
    rating.setAttribute('role', 'img');
    rating.setAttribute('aria-label', `Rating: ${recipe.rating} out of 5 stars`);
    let rounded = Math.round(recipe.rating);
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.setAttribute('aria-hidden', 'true');
      star.textContent = i <= rounded ? '⭐' : '☆';
      rating.appendChild(star);
    }
    card.appendChild(rating);

    // Description (mobile hidden)
    const desc = document.createElement('div');
    desc.className = 'recipe-desc';
    desc.textContent = recipe.description;
    card.appendChild(desc);

    recipeList.appendChild(card);
  });
}

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(query))
  );
  renderRecipes(filtered);
});

// Initial render
renderRecipes(recipes);
