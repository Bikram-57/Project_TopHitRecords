
    function togglePassword() {
        const passwordInput = document.getElementById("password");
        const checkbox = document.getElementById("showPassword");

        if (checkbox.checked) {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }




function whatsapp() {
    var phoneNumber = "+916297103889";
    var message = "Hello, I want to book a stay!";
    var apiLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(apiLink, "_blank");
};




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



   