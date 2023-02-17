const burger = document.querySelector(".burger");
const navElementer = document.querySelector(".nav-elementer");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navElementer.classList.toggle("active");
});

