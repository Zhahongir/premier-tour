window.addEventListener('DOMContentLoaded', () => {
    const menuItem = document.querySelectorAll('.menu__wrap__content__nav__item');
    const menu = document.querySelectorAll('.menu');

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            document.getElementById('hamburger').style.display = 'none';
        });
    });
});