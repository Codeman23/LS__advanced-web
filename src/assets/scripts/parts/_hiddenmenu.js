//======================= Меню ======================//

const menuButton = document.querySelector('.hamburger'),
    hmenu = document.querySelector('.hidden-menu'),
    closeMenu = document.querySelector('.close-icon'),
    contentWrap = document.querySelector('.wrapper');

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
});

closeMenu.addEventListener('click', function () {
    hideMenu();
});
