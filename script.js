let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('ul.navbar-nav li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 50;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('text-active');
            });
            document.querySelector(`ul.navbar-nav li a[href="#${id}"]`).classList.add('text-active');
        }
    });
};

var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-shadow");
    } else {
        navbar.classList.remove("navbar-shadow");
    }
});

const text = "Hello! I'm Lukman Hafidz.";
const delay = 150;
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, delay);
    } else {
        document.getElementById("typed-text").innerHTML += '<span class="cursor">|</span>';
    }
}

window.addEventListener('DOMContentLoaded', typeWriter);