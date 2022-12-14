import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

const header = document.querySelector(".header");
const hero = document.querySelector("#adventures");
scroll.on("scroll", (a) => {
  if (a.scroll.y > 500) {
    header.classList.add("fixed");
    hero.style.marginTop = `${header.offsetHeight + 26}px`;
  } else {
    header.classList.remove("fixed");
    hero.style.marginTop = `0px`;
  }
});
