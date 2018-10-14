//======================= Меню ======================//

const menuButton = document.querySelector('.hamburger'),
    hmenu = document.querySelector('.hidden-menu'),
    closeMenu = document.querySelector('.close-icon'),
    contentWrap = document.querySelector('.wrapper');

const menuLeft = document.querySelector('.hidden-menu__left'),
    menuRight = document.querySelector('.hidden-menu__right'),
    menuItems = document.querySelectorAll('.hidden-menu__item');

function appearMenu() {
    hmenu.classList.add('hidden-menu_active');
    menuButton.classList.add('hamburger_none');
    contentWrap.classList.add('wrapper-overflow');
}

function hideMenu() {
    hmenu.classList.remove('hidden-menu_active');
    menuButton.classList.remove('hamburger_none');
    contentWrap.classList.remove('wrapper-overflow');
}

menuButton.addEventListener('click', function () {
    appearMenu();

    setTimeout(function () {
        menuLeft.style.left = '0';
        menuRight.style.right = '0';
    },50);

    setTimeout(function () {

        for( let i = 0; i < menuItems.length; i++ ) {
            var menuItem = menuItems[i];
            menuItem.style.transitionDelay = (`${i}`* 0.5)+'s';
            menuItem.style.opacity = 1;
        }

    },500);
});

closeMenu.addEventListener('click', function () {

    for( let i = 0; i < menuItems.length; i++ ) {
        var menuItem = menuItems[i];
        menuItem.style.transitionDelay = '0s';
        menuItem.style.opacity = '0';
    }

    menuLeft.style.left = '-50vw';
    menuRight.style.right = '-50vw';

    setTimeout(function () {
        hideMenu();
    },700);
});


