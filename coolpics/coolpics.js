document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("menu-button").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("show");
  });
});