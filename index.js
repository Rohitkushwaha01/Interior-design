var ham = document.querySelector(".ham");
var ul = document.querySelector("ul");
var clicked = document.querySelector(".clicked");

ham.addEventListener("click", () => {
  ul.classList.toggle("clicked");
});

