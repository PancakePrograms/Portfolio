const burger = document.querySelector('.burger') 
const burgerMenu = document.querySelector('.burgerMenu')
burger.addEventListener('click', () => {
    
    if (burgerMenu.style.right === '-100vw' || burgerMenu.style.right === '') {
        burgerMenu.style.right = '0';
        console.log('open menu')
    } else {
        burgerMenu.style.right = '-100vw';
        console.log('closed')
    }
});

const Certifications = document.querySelector(".Certifications");
const intro = document.querySelector('.intro');
const certTab = document.querySelector('.certTab')

certTab.addEventListener('click', () => {
        intro.style.display = 'none';
        Certifications.style.display = 'flex';
})
const homeTab = document.querySelector('.homeTab');

homeTab.addEventListener('click', () => {
    intro.style.display = 'block';
    Certifications.style.display = 'none';
})