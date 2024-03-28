document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".navbar-link a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            links.forEach(function (link) {
                link.classList.remove("selected");
            });

            this.classList.add("selected");
        });
    });

    var burgerMenu = document.querySelector(".burger-menu");
    var navbarLinks = document.querySelector(".navbar-link");
    var burgerIcon = document.querySelector(".burger-icon");

    burgerMenu.addEventListener("click", function (event) {
        event.stopPropagation();

        navbarLinks.classList.toggle("active");
        burgerIcon.classList.toggle("active");
    });

    burgerIcon.addEventListener("click", function (event) {
        event.stopPropagation();

        navbarLinks.classList.toggle("active");
        burgerIcon.classList.toggle("active");
    });

    navbarLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            burgerMenu.classList.remove("active");
            navbarLinks.classList.remove("active");
            burgerIcon.classList.remove("active");
        });
    });
});

/* Banner Image Accueil */

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


/* Btn scroll to top */
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
    // Afficher le bouton lorsque la page est défilée de 400 pixels vers le bas
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    // Faire défiler la page jusqu'en haut avec une animation de smooth scrolling
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let title = document.querySelector('.title-page');
    let initialSize = 24;
    let finalSize = 128;
    let scrollThreshold = 600;
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        let currentSize = initialSize + (finalSize - initialSize) * (scrollPosition / scrollThreshold);
        currentSize = Math.max(initialSize, Math.min(finalSize, currentSize));
        title.style.fontSize = currentSize + "px";
    });
});


