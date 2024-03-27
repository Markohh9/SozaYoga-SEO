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

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})