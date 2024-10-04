
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('showing');
});
document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('image');
    image.style.opacity = 1;
});

let sections =document.querySelectorAll(Selection);
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + 150) {
            sec.classList.add('show-animate');
        }
        // if want to use repeating animation on scroll, use this
        else {
            sec.classList.remove('show-animate');
        }
    })
}

window.addEventListener('scroll', function() {
    var logoSection = document.getElementById('logo');
    var position = logoSection.getBoundingClientRect();
    
    if (position.top < window.innerHeight && position.bottom >= 0) {
        logoSection.style.opacity = 1;
        logoSection.style.transform = 'translateY(0)';
    } else {
        logoSection.style.opacity = 0;
        logoSection.style.transform = 'translateY(50px)';
    }
});

