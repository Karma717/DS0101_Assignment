/* ===== toggle icon navbar ===== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ===== Scroll Sections Active Link ===== */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
     /* ===== Sticky Navbar ===== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ===== Remove menu on scroll (mobile) ===== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/* ===== Scroll Reveal Animation ===== */
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ===== Typing Text Effect ===== */
const typed = new Typed('.multiple-text',{
    strings: ['Software Developer', 'UX/UI Designer'],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 100,
    loop: true
});

let themeToggle = document.querySelector('#theme-toggle');
let icon = themeToggle.querySelector('i');

// Load saved mode
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    icon.classList.replace('bx-moon', 'bx-sun');
}

themeToggle.onclick = () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        icon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem("theme", "light");
    } else {
        icon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem("theme", "dark");
    }
};

