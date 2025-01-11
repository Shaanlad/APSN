let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

const slides = document.querySelectorAll('.carousel-item');

slides.forEach(slide => {
    slide.style.transition = 'transform 0.5s ease-in-out';
});

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});