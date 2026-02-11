const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");
const header = document.querySelector("header");
const heroSection = document.querySelector(".hero");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Apply animations when opening
    if (navMenu.classList.contains("active")) {
        navItems.forEach((item, index) => {
            const delay = 0.2 + (index * 0.1); // Start at 0.2s, add 0.1s for each item
            item.style.animation = `slideInFromRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards ${delay}s`;
        });
    } else {
        // Reset animations when closing
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
