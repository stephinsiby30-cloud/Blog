const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");
const header = document.querySelector("header");
const heroSection = document.querySelector(".hero");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Reset animations when closing
    if (!navMenu.classList.contains("active")) {
        navItems.forEach(item => {
            item.style.animation = 'none';
        });
        // Force reflow to restart animations next time
        setTimeout(() => {
            navItems.forEach(item => {
                item.style.animation = '';
            });
        }, 50);
    }
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

    // Reset animations
    navItems.forEach(item => {
        item.style.animation = 'none';
    });
    setTimeout(() => {
        navItems.forEach(item => {
            item.style.animation = '';
        });
    }, 50);
}));

// Change header background on scroll
window.addEventListener("scroll", () => {
    const heroHeight = heroSection.offsetHeight;
    const isMobile = window.innerWidth <= 768;

    // On mobile, trigger after 100px scroll; on desktop, trigger near hero end
    const scrollThreshold = isMobile ? 100 : heroHeight - 100;

    if (window.scrollY >= scrollThreshold) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
