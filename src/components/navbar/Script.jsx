import { useEffect } from "react";

export default function Script() {
    useEffect(() => {
        const sections = document.querySelectorAll('.container[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        const navbar = document.getElementById("navbar");

        const handleScroll = () => {
            sections.forEach((sec) => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach((link) => {
                        link.classList.remove('text-active');
                    });
                    const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('text-active');
                    }
                }
            });

            if (window.scrollY > 0) {
                navbar.classList.add("navbar-shadow");
            } else {
                navbar.classList.remove("navbar-shadow");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
}
