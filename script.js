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