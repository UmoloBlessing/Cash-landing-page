const menuButton = document.getElementById('menu');
const menuSection = document.getElementById('menu-1');
const menuImage = menuSection.querySelector('img');
const quoteButtons = document.querySelectorAll('.quote');
const quoteSection = document.getElementById('quote-1');
const quoteImage = document.getElementById('img-1');


console.log(quoteButtons)

menuButton.addEventListener('click', () => {
    menuSection.classList.add('visible'); 
    document.body.classList.add('menu-open'); 
});

  menuImage.addEventListener('click', () => {
    menuSection.classList.remove('visible'); 
    document.body.classList.remove('menu-open'); 
});


quoteButtons.forEach(button => {
    button.addEventListener('click', () => {
        quoteSection.classList.add('visible'); 
        document.body.classList.add('quote-open'); 
    });
});

quoteImage.addEventListener('click', () => {
    quoteSection.classList.remove('visible'); 
    document.body.classList.remove('quote-open'); 
});




