// This is a JavaScript file for my personal biography webpage.
function closePopup(popupId) {
    var targetContainer = document.getElementById(popupId);
    targetContainer.style.display = "none"; // Hide the clicked popup container
}

let mySwiper = new Swiper('.container-2', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: false,
    sliderPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 100,
        modifier: 7
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
})

const nav = document.querySelector('.navbar')
const about = document.querySelector('.intro-div-2')
const navHeight = nav.getBoundingClientRect().height;

document.querySelectorAll('.nav-link').forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        const targetElement = document.querySelector(id);

        if (targetElement) {
            const offset = `${navHeight}`; // Replace with your desired offset in pixels
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    });
});

const stickyNav = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
};

const headerObserver = new IntersectionObserver
(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
});

headerObserver.observe(about);

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".details-button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var targetID = this.getAttribute("data-target");
            var popupContainers = document.querySelectorAll(".popup-container");

            popupContainers.forEach(function(container) {
                container.style.display = "none"; // Hide all popup containers
            });

            var targetContainer = document.getElementById(targetID);
            targetContainer.style.display = "block"; // Show the clicked popup container
        });
    });

    // Add event listeners to close buttons
    var closeButtons = document.querySelectorAll(".close-button");

    closeButtons.forEach(function(closeButton) {
        closeButton.addEventListener("click", function() {
            var targetID = this.getAttribute("data-target");
            var targetContainer = document.getElementById(targetID);
            targetContainer.style.display = "none"; // Hide the clicked popup container
        });
    });
});