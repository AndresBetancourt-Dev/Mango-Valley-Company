const developersModal = document.querySelectorAll(".developer-more");
const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const developersContent = document.querySelectorAll(".developer");

const developersExtraInfo = [
  "I like Javascript.",
  "Java is the best!",
  "Basic Web is Cool!",
  "One of the most billionares in the world",
  "A greedy bitch!"
]

developersModal.forEach((button, index) => {
  button.addEventListener("click", () => {
    modalContainer.classList.add("active");
    modal.children[0].children[0].setAttribute(
      "src",
      developersContent[index].children[0].children[0].getAttribute("src")
    );
    modal.children[1].innerHTML =
      developersContent[index].children[1].innerHTML;
    modal.children[2].innerHTML = developersContent[index].children[2].innerHTML;
    modal.children[3].innerHTML = developersExtraInfo[index];
  });
});

modalClose.addEventListener("click", () => {
  modalContainer.classList.remove("active");
});
