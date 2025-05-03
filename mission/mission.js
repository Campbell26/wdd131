const themeSelector = document.querySelector("#theme-select");
const body = document.body;
const logo = document.querySelector(".logo");

function changeTheme() {
  if (themeSelector.value === "dark") {
    body.classList.add("dark");
    logo.src = "images/byui-logo_white.png"; // white logo for dark mode
  } else {
    body.classList.remove("dark");
    logo.src = "images/byui-logo.webp"; // default blue logo for light mode
  }
}

themeSelector.addEventListener("change", changeTheme);

