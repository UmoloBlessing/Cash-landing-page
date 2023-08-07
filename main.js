const menuButton = document.getElementById('menu');
const menuSection = document.getElementById('menu-1');
const menuImage = menuSection.querySelector('img');
const quoteButtons = document.querySelectorAll('.quote');
const quoteSection = document.getElementById('quote-1');
const quoteImage = document.getElementById('img-1');

menuButton.addEventListener('click', () => {
    menuSection.classList.toggle('open');
    document.body.classList.toggle('menu-open');
});

menuImage.addEventListener('click', () => {
    menuSection.classList.toggle('open');
    document.body.classList.toggle('menu-open');
});

quoteButtons.forEach(button => {
    button.addEventListener('click', () => {
        quoteSection.classList.toggle('open');
        document.body.classList.toggle('quote-open');
    });
});

quoteImage.addEventListener('click', () => {
    quoteSection.classList.toggle('open');
    document.body.classList.toggle('quote-open');
});





