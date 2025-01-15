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

fetch('/principals-message.txt')
.then(response => response.text())
.then(data => {
  document.getElementById('principals-message').textContent = data;
})
.catch(error => console.error('Error loading file:', error));

function showDiv(divNumber) {
  document.getElementById('div1').style.display = 'none';
  document.getElementById('div2').style.display = 'none';
  document.getElementById('div3').style.display = 'none';
  document.getElementById('div' + divNumber).style.display = 'block';
}

// Show div1 by default
document.addEventListener('DOMContentLoaded', function() {
  showDiv(1);
  document.querySelector('.styled-button:nth-child(1)').classList.add('selected');

  document.querySelectorAll('.styled-button').forEach((button, index) => {
      button.addEventListener('click', () => {
          document.querySelectorAll('.styled-button').forEach(btn => btn.classList.remove('selected'));
          button.classList.add('selected');
      });
  });               
});