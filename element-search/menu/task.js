const menuItems = Array.from(document.querySelectorAll('.menu_sub'));

function closeMenu() {
    const index = menuItems.indexOf(document.querySelector('.menu_active'));
    menuItems[index].classList.remove('menu_active');
};

function activateMenu() {
    let active = document.querySelector('.menu_active');
    return menuItems.includes(active);
};

for (let i = 0; i < menuItems.length; i++) {
   menuItems[i].closest('li').onclick = () => {

        if (menuItems[i].classList.contains('menu_active')) {
            closeMenu();
            return;
        } else if (activateMenu()) {
            closeMenu();
        }
        
        menuItems[i].classList.add('menu_active');
        return false;
    }
};
