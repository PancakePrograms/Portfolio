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
    
})