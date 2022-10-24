window.addEventListener('DOMContentLoaded', (event) => {
    const cursor = document.getElementById('cursor');
    const card = document.getElementById('card');
    cursor.addEventListener('click', () => {
    card.classList.toggle('is-opened');
    });
});