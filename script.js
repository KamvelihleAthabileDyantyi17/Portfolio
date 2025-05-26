function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Optional: Close menu when clicking outside
document.addEventListener('click', function(event) {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    
    // Check if click is outside the hamburger menu
    if (!hamburgerMenu.contains(event.target) && menu.classList.contains('open')) {
        menu.classList.remove('open');
        icon.classList.remove('open');
    }
});

// Optional: Close menu when pressing Escape key
document.addEventListener('keydown', function(event) {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    
    if (event.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        icon.classList.remove('open');
    }
});