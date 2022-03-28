const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".containers");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
