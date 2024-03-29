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

// Mendapatkan elemen navbar
var navbar = document.getElementById("navbar");

// Mendeteksi peristiwa scroll
window.addEventListener("scroll", function() {
    // Jika posisi scroll lebih besar dari 0, tambahkan kelas yang memiliki efek shadow
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-shadow");
    } else {
        // Jika tidak, hapus kelas tersebut
        navbar.classList.remove("navbar-shadow");
    }
});