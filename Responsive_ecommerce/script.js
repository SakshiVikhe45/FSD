const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Check if the bar icon exists, then add click event to open menu
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

// Check if the close icon exists, then add click event to hide menu
if (close) {
    close.addEventListener('click', (e) => {
        e.preventDefault(); // Stop page from refreshing/jumping
        nav.classList.remove('active');
    });
}