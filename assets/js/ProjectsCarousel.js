const projects = document.querySelectorAll(".project-container");
const projectsCarousel = document.querySelector(".projects");
const projectsLeft = document.querySelector(".projects-left");
const projectsRight = document.querySelector(".projects-right");

const projectS_COUNT = projects.length;
let currentproject = 0;

const updateproject = () => {
  projectsCarousel.style.transform = `translateX(-${
    currentproject * 100
  }vw`;
};

projectsLeft.addEventListener("click", () => {
  currentproject--;
  if (currentproject < 0) {
    currentproject = projectS_COUNT - 1;
  }
  updateproject();
});

projectsRight.addEventListener("click", () => {
  currentproject++;
  if (currentproject > projectS_COUNT - 1) {
    currentproject = 0;
  }
  updateproject();
});
