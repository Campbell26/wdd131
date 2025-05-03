// Step 1: Add a paragraph
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript!";
document.body.appendChild(newParagraph);

// Step 2: Add an image
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

// Step 3: Add a list using innerHTML
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Step 4: Add a new section with a heading and paragraph
const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(newSection);
