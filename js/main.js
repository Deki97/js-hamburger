// APERTURA (CLICK) DEL BURGER MENU
const apriBurgerMenu = document.querySelector('.header-right > a');
apriBurgerMenu.addEventListener('click', 
    function() {
        const burgerMenu = document.querySelector('.hamburger-menu');
        burgerMenu.style.display = "block";
    }
)

// CHIUSURA (CLICK) DEL BURGER MENU, TRAMITE LA X
const chiudiBurgerMenu = document.querySelector('.hamburger-menu > a');
chiudiBurgerMenu.addEventListener('click', 
    function() {
        const burgerMenu = document.querySelector('.hamburger-menu');
        burgerMenu.style.display = "none";
    }
)