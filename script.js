// Typed.js text animation
const typed = new Typed('.multiple-text', {
    strings: ['Front-End Developer', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Circle skill animation
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    let dots = elem.getAttribute("data-dots");
    let percent = elem.getAttribute("data-percent");
    let marked = Math.floor(dots * percent / 100);
    let points = "";
    let rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < marked; i++) {
        pointsMarked[i].classList.add('marked');
    }
});

// Portfolio filtering
var mixer = mixitup('.portfolio-gallery');

// Mobile menu toggle
let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

// Close menu when clicking a nav link (for mobile)
document.querySelectorAll('.navlist a').forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navlist.classList.remove('active');
    };
});
