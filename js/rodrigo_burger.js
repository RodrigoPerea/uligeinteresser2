document.addEventListener("DOMContentLoaded", nav);
function nav() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-bar-menu");

  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}
