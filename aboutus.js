const slidesElm = document.querySelectorAll(".slider-container .slide-box");

Array.from(slidesElm).forEach((slide) => {
  slide.addEventListener("click", () => {
    Array.from(slidesElm).forEach((sld) => sld.classList.remove("active"));
    slide.classList.add("active");
  });
});
