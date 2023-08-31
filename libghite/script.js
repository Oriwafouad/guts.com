

const menuButton = document.querySelector('.menu-button');
const navbars = document.querySelectorAll('.navbar');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navbars.forEach(navbar => navbar.classList.toggle('active'));
});


const slides = document.querySelectorAll (".carousel-slide");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const indicatorsContainer = document.querySelector(".carousel-indicators");
let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].style.display = "none";
  slides[index].style.display = "block";
  currentSlide = index;
  updateIndicators();
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

function updateIndicators() {
  const indicators = Array.from(indicatorsContainer.children);
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Create slide indicators
slides.forEach((_, index) => {
  const indicator = document.createElement("div");
  indicator.classList.add("carousel-indicator");
  indicator.addEventListener("click", () => showSlide(index));
  indicatorsContainer.appendChild(indicator);
});

// Automatically advance to the next slide every 3 seconds
setInterval(nextSlide, 3000);

// Show the first slide initially
showSlide(0);





document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.custom-carousel');
  const customPrevButton = document.querySelector('.custom-prev-button');
  const customNextButton = document.querySelector('.custom-next-button');
  const moveDistance = 0.1; 
  let currentIndex = 0;
  let autoInterval;

  customNextButton.addEventListener('click', () => navigateCarousel(moveDistance));
  customPrevButton.addEventListener('click', () => navigateCarousel(-moveDistance));

  function navigateCarousel(distance) {
    currentIndex = (currentIndex + distance + carousel.children.length) % carousel.children.length;
    updateCarousel();
  }

  function updateCarousel() {
    const offset = -currentIndex * carousel.clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  function startAutoScroll() {
    autoInterval = setInterval(() => navigateCarousel(moveDistance), 900); 
  }


  startAutoScroll();
});




document.addEventListener('DOMContentLoaded', () => {
  const reloadButton = document.getElementById('reload-button');

  reloadButton.addEventListener('click', () => {
    location.reload();
  });
});










const colorButton = document.getElementById("colorButton");

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

colorButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
});







function translateToArabic() {
  // Replace 'YOUR_API_KEY' with your actual Google Translate API key
  const apiKey = 'YOUR_API_KEY';
  const sourceLanguage = 'en';
  const targetLanguage = 'ar';
  const contentToTranslate = $('body').html();

  const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  const requestData = {
    q: contentToTranslate,
    source: sourceLanguage,
    target: targetLanguage
  };

  $.post(apiUrl, requestData, function(response) {
    const translatedContent = response.data.translations[0].translatedText;
    $('body').html(translatedContent);
  });
}







const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");

dropdownBtn.addEventListener("click", function () {
  dropdownContent.classList.toggle("active");
});



