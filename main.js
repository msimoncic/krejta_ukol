var limit = 45;

/*=============== MENU JS ===============*/

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.header-main__list');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);