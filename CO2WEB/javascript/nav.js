document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burgermenu');
    const burgerList = document.querySelector('.burgerlist');

    burgerMenu.addEventListener('click', function() {
        burgerList.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
});
