// APERTURA (CLICK) DEL BURGER MENU
const apriBurgerMenu = document.querySelector('.header-right i');
apriBurgerMenu.addEventListener('click', 
    function() {
        const burgerMenu = document.querySelector('.hamburger-menu');
        burgerMenu.style.display = "block";
    }
)

// CHIUSURA (CLICK) DEL BURGER MENU, TRAMITE LA X
const chiudiBurgerMenu = document.querySelector('.hamburger-menu i');
chiudiBurgerMenu.addEventListener('click', 
    function() {
        const burgerMenu = document.querySelector('.hamburger-menu');
        burgerMenu.style.display = "none";
    }
)