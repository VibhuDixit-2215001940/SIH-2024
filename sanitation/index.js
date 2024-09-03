const navLinks = document.querySelectorAll(".nav-list a");

function removeActiveClass() {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
}
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    removeActiveClass();
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const wasteSeparationElement = document.querySelector(".waste-separation");
  function checkVisibility() {
    const rect = wasteSeparationElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      wasteSeparationElement.classList.add("visible");
    }
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
document.addEventListener("DOMContentLoaded", function () {
  const wasteSeparationElement = document.querySelector(".recycling-for-kids");
  function checkVisibility() {
    const rect = wasteSeparationElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      wasteSeparationElement.classList.add("visible");
    }
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
document.addEventListener("DOMContentLoaded", function () {
  const wasteSeparationElement = document.querySelector(".boot");
  function checkVisibility() {
    const rect = wasteSeparationElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      wasteSeparationElement.classList.add("visible");
    }
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
document.addEventListener("DOMContentLoaded", function () {
  const wasteSeparationElement = document.querySelector(".intro-services");
  function checkVisibility() {
    const rect = wasteSeparationElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      wasteSeparationElement.classList.add("visible");
    }
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
document.addEventListener("DOMContentLoaded", function () {
  const wasteSeparationElement = document.querySelector(
    ".importance-sanitation"
  );
  function checkVisibility() {
    const rect = wasteSeparationElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      wasteSeparationElement.classList.add("visible");
    }
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
document.addEventListener("DOMContentLoaded", function () {
  const wasteSeparationElement = document.querySelector(".sanitation-tips");
  function checkVisibility() {
    const rect = wasteSeparationElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      wasteSeparationElement.classList.add("visible");
    }
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

const tips = [
  " Wash Hands Frequently: Always wash your hands with soap and water for at least 20 seconds, especially before eating and after using the restroom.",
  " Use Hand Sanitizer: When soap and water aren't available, use a hand sanitizer with at least 60% alcohol.",
  " Keep Surfaces Clean: Regularly clean and disinfect frequently touched surfaces such as doorknobs, light switches, and countertops.",
  " Dispose of Waste Properly: Always dispose of waste in designated bins and ensure that bins are covered.",
  " Use Clean Water: Ensure that the water you use for drinking, cooking, and washing is clean and safe.",
  " Maintain Personal Hygiene: Regularly shower or bathe, and ensure your clothes are clean.",
  " Keep Your Environment Clean: Regularly clean your living and working environment to reduce the risk of contamination.",
  " Proper Food Storage: Store food at the correct temperatures and avoid cross-contamination by keeping raw and cooked foods separate.",
  " Use Safe Toilets: Always use safe and clean toilet facilities to prevent the spread of diseases.",
  " Educate Others: Share sanitation tips with your family, friends, and community to promote good hygiene practices.",
  " Cover Your Mouth When Coughing: Use a tissue or your elbow to cover your mouth when you cough or sneeze.",
  " Stay Home When Sick: If you're feeling unwell, stay home to prevent spreading illness to others.",
  " Avoid Sharing Personal Items: Don't share items like toothbrushes, towels, or eating utensils with others.",
  " Proper Ventilation: Ensure your home and workplace are well-ventilated to reduce the spread of airborne diseases.",
  " Handle Food Safely: Always wash your hands before handling food, and ensure all utensils are clean.",
  " Avoid Touching Your Face: Keep your hands away from your face, especially your eyes, nose, and mouth, to prevent the spread of germs.",
  " Keep Your Nails Short: Short nails are easier to clean and less likely to harbor dirt and germs.",
  " Regularly Change Bedding: Wash and change your bedding regularly to maintain a clean sleeping environment.",
  " Use Clean Cooking Equipment: Ensure that all cooking equipment is clean before use to prevent foodborne illnesses.",
  " Practice Safe Waste Disposal: Dispose of medical and hazardous waste in proper containers to avoid contamination.",
];

let currentTipIndex = 0;
const tipText = document.getElementById("tip-text");

function showNextTip() {
  tipText.textContent = tips[currentTipIndex];
  currentTipIndex = (currentTipIndex + 1) % tips.length;
  if (currentTipIndex === 20) currentTipIndex = 0;
}

setInterval(showNextTip, 5000);

showNextTip();
