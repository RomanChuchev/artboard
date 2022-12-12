document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".adventures__top");
  const header = document.querySelector(".header");
  const scrollItems = document.querySelectorAll(".scroll-item");

  const scrollAnimation = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY;

    scrollItems.forEach((el) => {
      let scrollOffset = el.offsetTop + el.offsetHeight / 2;
      if (windowCenter >= scrollOffset) {
        el.classList.add("animation-class");
      } else {
        el.classList.remove("animation-class");
      }
    });
  };

  const headerFixed = () => {
    let scrollTop = window.scrollY;
    let heroCenter = hero.offsetHeight / 2;

    if (scrollTop >= heroCenter) {
      header.classList.add("fixed");
      hero.style.marginTop = `${header.offsetHeight + 26}px`;
    } else {
      header.classList.remove("fixed");
      hero.style.marginTop = `0px`;
    }
  };

  const scrollRight = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY;
    document.querySelectorAll(".scroll-item-horizontal").forEach((el) => {
      const elOffset = offsetScroll(el).top;
      let scrollOffset = el.offsetTop + el.offsetHeight / 2;
      const height = windowCenter - elOffset;

      if (windowCenter + scrollOffset >= elOffset) {
        el.style.right = height * 4 - 1067 + "px";
      }
    });
  };
  scrollRight();
  headerFixed();
  scrollAnimation();
  window.addEventListener("scroll", () => {
    headerFixed();
    scrollRight();
    scrollAnimation();
  });
});

function offsetScroll(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
