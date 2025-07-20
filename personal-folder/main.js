// slide URLs + alt texts
const images = [
  'images/madison-river.jpg',
  'images/madison-river-4.webp',
  'images/missoula-river-3.jpg',
  'images/water-we-fish1.jpg',
  'images/homepage3.jpg'
];
const alts = [
  'Scenic view of Madison River in Montana at sunset',
  'Early morning mist on Madison River',
  'Two anglers casting on Madison River',
  'Group fly fishing along the river bank',
  'Wide view of anglers on Montana river'
];

let currentIndex = 0;
const imgEl   = document.getElementById('slide-image');
const nextBtn = document.querySelector('.slideshow .next');
const prevBtn = document.querySelector('.slideshow .prev');

// show a slide by index (wraps around)
function showSlide(idx) {
  currentIndex = (idx + images.length) % images.length;
  imgEl.src     = images[currentIndex];
  imgEl.alt     = alts[currentIndex];
}

// attach handlers
nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));

// auto‑rotate every 5s
setInterval(() => showSlide(currentIndex + 1), 5000);
