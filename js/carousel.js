function setupCarousel(carousel) {
  const controls = carousel.querySelectorAll(".control");
  let currentItem = 0;
  const items = carousel.querySelectorAll(".item");
  const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    e.preventDefault();

    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    const galleryWrapper = control.closest(".carousel-container").querySelector(".gallery-wrapper");
    const itemWidth = items[currentItem].offsetWidth;
    const scrollLeft = itemWidth * currentItem;
    
    galleryWrapper.scrollLeft = scrollLeft;

    items[currentItem].classList.add("current-item");
  });
});
}

const carousels = document.querySelectorAll(".carousel-container");

carousels.forEach((carousel) => {
  setupCarousel(carousel);
});