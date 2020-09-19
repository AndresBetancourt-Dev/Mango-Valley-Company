const developers = document.querySelectorAll(".developer-container");
const developersCarousel = document.querySelector(".developers");
const developersLeft = document.querySelector(".developers-left");
const developersRight = document.querySelector(".developers-right");

const DEVELOPERS_COUNT = developers.length;
let currentDeveloper = 0;

const updateDeveloper = () => {
    developersCarousel.style.transform = `translateX(-${currentDeveloper*100}vw`;
}

developersLeft.addEventListener("click", () => {
  currentDeveloper++;
  if (currentDeveloper > DEVELOPERS_COUNT - 1) {
    currentDeveloper = 0;
  }
  updateDeveloper();
  console.log(currentDeveloper)
});

developersRight.addEventListener("click", () => {
  currentDeveloper--;
  if (currentDeveloper < 0) {
    currentDeveloper = DEVELOPERS_COUNT - 1;
  }
  updateDeveloper();
  console.log(currentDeveloper)
});
