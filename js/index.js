document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".navbar-link a");

    links.forEach(function(link) {
        link.addEventListener("click", function() {
            links.forEach(function(link) {
                link.classList.remove("selected");
            });

            this.classList.add("selected");
        });
    });

    var burgerMenu = document.querySelector(".burger-menu");
    var navbarLinks = document.querySelector(".navbar-link");
    var burgerIcon = document.querySelector(".burger-icon");

    burgerMenu.addEventListener("click", function(event) {
        event.stopPropagation();

        navbarLinks.classList.toggle("active");
        burgerIcon.classList.toggle("active");
    });

    burgerIcon.addEventListener("click", function(event) {
        event.stopPropagation();

        navbarLinks.classList.toggle("active");
        burgerIcon.classList.toggle("active");
    });

    navbarLinks.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            burgerMenu.classList.remove("active");
            navbarLinks.classList.remove("active");
            burgerIcon.classList.remove("active");
        });
    });
});
