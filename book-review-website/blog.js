const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "images/Magkycover2.jpg",
    imgAlt: "Cover of Septimus Heap Book One: Magyk by Angie Sage",
    ages: "10–14",
    genre: "Fantasy",
    stars: "****"
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description: "If you like Norse mythology and fast-paced action, this is the book for you.",
    imgSrc: "images/magnus.jpg",
    imgAlt: "Cover of Magnus Chase Book One: Sword of Summer by Rick Riordan",
    ages: "12–16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12–16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
  }
];

const container = document.getElementById('articles-container');

function renderArticles() {
  articles.forEach(item => {
    const articleEl = document.createElement('article');
    articleEl.innerHTML = `
      <div class="article-details">
        <p class="date">${item.date}</p>
        <p class="age">${item.ages}</p>
        <p class="genre">${item.genre}</p>
        <p class="rating">${item.stars}</p>
      </div>
      <div class="article-content">
        <h2>${item.title}</h2>
        <img src="${item.imgSrc}" alt="${item.imgAlt}" />
        <p>${item.description} <a href="#">Read More...</a></p>
      </div>
    `;
    container.appendChild(articleEl);
  });
}

// Render articles on page load
renderArticles();