// Sidebar & Hamburger X
/* ========================================
   DR. RAMHSA LOADER HIDING LOGIC
======================================== */

// Is logic ko call karna jab page puri tarah load ho jaye
window.addEventListener('load', function() {
    const loader = document.getElementById('page-loader');
    
    // Smooth transition ke sath loader ko hide karo
    if (loader) {
        // Halka sa delay agar smooth load chahiye (optional: set to 0)
        setTimeout(() => {
            loader.classList.add('loader-hidden');
        }, 2000); // 2 seconds ka initial display (pulse aur logo entry ke liye)
    }
});


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


// animation for timeline entries
window.addEventListener('load', function() {
    const loader = document.getElementById('page-loader');
    const heroSection = document.querySelector('.dr-hero');

    if (loader) {
        setTimeout(() => {
            loader.classList.add('loader-hidden');
            
            // Loader hatne ke foran baad animation start
            setTimeout(() => {
                heroSection.classList.add('reveal-hit');
            }, 300); // Halka sa gap for smooth transition
            
        }, 2000); 
    }
});


const scrollReveal = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Agar section 15% bhi screen par nazar aye to trigger ho jaye
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    // Tamam sections jin mein 'reveal' class hai unhein observe karo
    document.querySelectorAll('.reveal').forEach(section => {
        observer.observe(section);
    });
};

// Page load hone par function chalao
document.addEventListener('DOMContentLoaded', scrollReveal);


// api
const form = document.getElementById('appointment-form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";
  result.style.color = "#4ac7f2";

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Request Sent Successfully!";
                result.style.color = "green";
                form.reset();
            } else {
                console.log(response);
                result.innerHTML = json.message;
                result.style.color = "red";
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            setTimeout(() => {
                result.innerHTML = "";
            }, 5000);
        });
});

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

// Check karo ke screen laptop/desktop wali hai (900px se bari)
if (window.innerWidth > 900) {
    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot foran move karega
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline halka sa delay ke sath piche ayega (Smoothness)
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover Effect on Links & Buttons
    const links = document.querySelectorAll('a, button, .dr-s-link');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('cursor-active');
        });
        link.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('cursor-active');
        });
    });
} else {
    // Agar mobile hai to cursor elements ko permanently hide kar do
    cursorDot.style.display = "none";
    cursorOutline.style.display = "none";
}