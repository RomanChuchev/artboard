const selectHeader = document.querySelectorAll(".menu-select");

selectHeader.forEach((el) => {
  el.querySelector(".menu-select__head").addEventListener("click", () => {
    el.classList.toggle("open");
  });
});
