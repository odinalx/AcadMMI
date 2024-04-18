
document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.burgerbtn');
    const burgerMenu = document.querySelector('.burger');

    burgerButton.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
    });
});