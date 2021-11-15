const apriBurgerMenu = document.querySelector('.header-right i');
// console.log(apriBurgerMenu);

apriBurgerMenu.addEventListener('click', 
    function() {
        const burgerMenu = document.querySelector('.hamburger-menu');
        // console.log(burgerMenu);
        burgerMenu.style.display = "block";
    }
)
