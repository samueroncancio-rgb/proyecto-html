const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.links');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Cerrar al hacer click en el overlay
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');

    menuBtn.innerHTML = menu.classList.contains('active')
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});