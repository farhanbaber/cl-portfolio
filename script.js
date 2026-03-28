// Sidebar & Hamburger X
const ham = document.getElementById('dr-ham');
const menu = document.getElementById('dr-menu');

ham.addEventListener('click', () => {
    menu.classList.toggle('active');
    ham.classList.toggle('is-active');
});

// Slider logic (2 seconds)
const imgs = [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
    "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=2070",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070"
];

let i = 0;
const sliderImg = document.getElementById('dr-slider-img');
const dots = document.querySelectorAll('.dr-dot');

function runSlider() {
    i = (i + 1) % imgs.length;
    sliderImg.style.opacity = '0.4';
    setTimeout(() => {
        sliderImg.src = imgs[i];
        sliderImg.style.opacity = '1';
        dots.forEach(d => d.classList.remove('active'));
        dots[i].classList.add('active');
    }, 300);
}

setInterval(runSlider, 2000);

// Close menu on click
document.querySelectorAll('.dr-link, .dr-contact-btn').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        ham.classList.remove('is-active');
    });
});