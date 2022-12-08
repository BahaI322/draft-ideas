window.addEventListener('DOMContentLoaded', (event) => {
    const next_button = document.getElementById('next-button');
    const carousel = document.getElementById('carousel');
    next_button.addEventListener('click', () => {
    carousel.classList.toggle('photo');
    });
});