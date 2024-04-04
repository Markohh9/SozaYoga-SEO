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
    document.querySelector('.slide').prepend(items[items.length - 1])
})


/* FAQ */
document.addEventListener("DOMContentLoaded", function () {
    const allAstuceSections = document.querySelectorAll('.astuce-section');
    allAstuceSections.forEach(section => {
        section.style.display = 'none';
    });
    const astuceButtons = document.querySelectorAll('.astuce-button');
    astuceButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            allAstuceSections.forEach(section => {
                section.style.display = 'none';
            });
            if (targetSection) {
                targetSection.style.display = (targetSection.style.display === 'block') ? 'none' : 'block';
            }
        });
    });
    const accordionButtons = document.querySelectorAll('.accordion');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active2');
            let panel = this.nextElementSibling;
            if (panel.style.display === 'block' || panel.style.display === '') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });
    const accordionQuestions = document.querySelectorAll('.accordion');
    accordionQuestions.forEach(question => {
        question.addEventListener('click', function () {
            this.classList.toggle('active2');
            let answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});




// Gérer l'ouverture et la fermeture des sections FAQ
const accordionButtons = document.querySelectorAll('.accordion');
accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('active2');
        let panel = this.nextElementSibling;
        if (panel.style.display === 'block' || panel.style.display === '') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});;













/* Btn scroll to top */
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

