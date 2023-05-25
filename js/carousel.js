var carousel = document.querySelector('.carousel');
var carouselContainer = carousel.querySelector('.carousel-container');
var prevButton = carousel.querySelector('.carousel-prev');
var nextButton = carousel.querySelector('.carousel-next');

var slideWidth = carouselContainer.clientWidth;
var currentIndex = 0;

function goToSlide(index) {
  carouselContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

function goToNextSlide() {
  if (currentIndex < 9) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(0);
  }
}

function goToPrevSlide() {
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  } else {
    goToSlide(9);
  }
}

nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPrevSlide);