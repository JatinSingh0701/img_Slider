const firstImg = document.getElementById("img-1");
const secondImg = document.getElementById("img-2");
const thirdImg = document.getElementById("img-3");

const sliderImages = [firstImg, secondImg, thirdImg];
let currentSlide = 0;

function showSlide() {
  sliderImages.forEach((img) => {
    img.style.display = "none";
  });

  sliderImages[currentSlide].style.display = "block";
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = sliderImages.length - 1;
  }
  showSlide(); // if you want to show the slide after clicking the button
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= sliderImages.length) {
    currentSlide = 0;
  }
  showSlide(); // if you want to show the slide after clicking the button
}

// showSlide(); // if you want to show the slide after clicking the button

if (firstImg && secondImg && thirdImg) {
  showSlide();
  setInterval(nextSlide, 3000);
} else {
  console.log("No images found");
}
