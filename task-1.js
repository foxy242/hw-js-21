const images = document.querySelectorAll('.image');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.querySelector('.full-image');
let currentIndex = 0;

function openFullImage(index) {
  fullImage.src = images[index].src;
  fullImageContainer.style.display = 'flex';
}

function closeFullImage() {
  fullImageContainer.style.display = 'none';
}

function navigateGallery(event) {
  if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openFullImage(currentIndex);
  } else if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % images.length;
    openFullImage(currentIndex);
  }
}

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    openFullImage(currentIndex);
  });
});

fullImageContainer.addEventListener('click', closeFullImage);

document.addEventListener('keydown', navigateGallery);