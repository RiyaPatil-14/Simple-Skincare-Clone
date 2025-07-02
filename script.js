let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}


let currentIndex2 = 0;
const images2 = document.querySelectorAll('.carousel2-image');

function showImage2(index) {
  images2.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextImage2() {
  currentIndex2 = (currentIndex2 + 1) % images2.length;
  showImage2(currentIndex2);
}

function prevImage2() {
  currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
  showImage2(currentIndex2);
}
