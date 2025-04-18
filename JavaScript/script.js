

const track = document.getElementById('carouselTrack');
const items = document.querySelectorAll('.carousel-item-custom');
const visibleItems = 3;
const totalItems = items.length;
const itemWidth = 100 / visibleItems;
let index = 0;

function moveCarousel() {
  index++;
  track.style.transition = 'transform 1.5s ease-in-out';
  track.style.transform = `translateX(-${index * itemWidth}%)`;

  if (index >= totalItems - visibleItems) {
    setTimeout(() => {
      track.style.transition = 'none';
      index = 0;
      track.style.transform = `translateX(0%)`;
    }, 500);
  }
}

setInterval(moveCarousel, 3000);
