const burger = document.querySelector(".burger");
const navBarMenu = document.querySelector(".nav-bar-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navBarMenu.classList.toggle("active");
});

