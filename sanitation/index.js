const navLinks = document.querySelectorAll('.nav-list a');

function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        removeActiveClass();
        this.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const wasteSeparationElement = document.querySelector('.waste-separation');
    function checkVisibility() {
        const rect = wasteSeparationElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            wasteSeparationElement.classList.add('visible');
        }
    }
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
document.addEventListener("DOMContentLoaded", function() {
    const wasteSeparationElement = document.querySelector('.recycling-for-kids');
    function checkVisibility() {
        const rect = wasteSeparationElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            wasteSeparationElement.classList.add('visible');
        }
    }
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
document.addEventListener("DOMContentLoaded", function() {
    const wasteSeparationElement = document.querySelector('.boot');
    function checkVisibility() {
        const rect = wasteSeparationElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            wasteSeparationElement.classList.add('visible');
        }
    }
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
