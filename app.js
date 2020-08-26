const chair123 = document.querySelector(".chair123"),
  chair456 = document.querySelector(".chair456"),
  chair789 = document.querySelector(".chair789"),
  prevBtn123 = document.querySelector(".first-prev-btn"),
  nextBtn123 = document.querySelector(".first-next-btn"),
  prevBtn456 = document.querySelector(".sec-prev-btn"),
  nextBtn456 = document.querySelector(".sec-next-btn"),
  prevBtn789 = document.querySelector(".third-prev-btn"),
  nextBtn789 = document.querySelector(".third-next-btn");
const search = document.querySelector(".search"),
  searchIcon = document.querySelector(".fa-search");

// Load all event listeners
function loadEventListeners(e) {
  prevBtn123.addEventListener("click", firstPrev);
  nextBtn123.addEventListener("click", firstNext);
  prevBtn456.addEventListener("click", secPrev);
  nextBtn456.addEventListener("click", secNext);
  prevBtn789.addEventListener("click", thirdPrev);
  nextBtn789.addEventListener("click", thirdNext);
  searchIcon.addEventListener("click", searchAppears);
}

function firstPrev(e) {
  chair123.style.display = "none";
  chair456.style.display = "none";
  chair789.style.display = "block";
}

function firstNext(e) {
  chair123.style.display = "none";
  chair456.style.display = "block";
  chair789.style.display = "none";
}

function secPrev(e) {
  chair123.style.display = "block";
  chair456.style.display = "none";
  chair789.style.display = "none";
}

function secNext(e) {
  chair123.style.display = "none";
  chair456.style.display = "none";
  chair789.style.display = "block";
}

function thirdPrev(e) {
  chair123.style.display = "none";
  chair456.style.display = "block";
  chair789.style.display = "none";
}
function thirdNext(e) {
  chair123.style.display = "block";
  chair456.style.display = "none";
  chair789.style.display = "none";
}

chair456.style.display = "none";
chair789.style.display = "none";

let imgShowcase = document.querySelector(".showcase-img"),
  currentPos = 0,
  imgs = ["img/showcase-1.jpg", "img/showcase-2.png", "img/showcase-3.jpg"];

function showcaseImg() {
  if (++currentPos >= imgs.length) {
    currentPos = 0;
  }

  imgShowcase.src = imgs[currentPos];
}

setInterval(showcaseImg, 3000);

let text = document.querySelector(".showcase-text");

function textColor() {
  if (imgs.length == 0) {
    text.style.color = "black";
  }
}

function searchAppears(e) {
  if (search.style.display == "none") {
    search.style.display = "inline-block";
  } else if (search.style.display == "inline-block") {
    search.style.display = "none";
  }
}

search.style.display = "none";

textColor();

loadEventListeners();
