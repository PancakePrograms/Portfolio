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
        certTab.style.color = 'rgb(145, 202, 250)'
        homeTab.style.color = 'white'
})
const homeTab = document.querySelector('.homeTab');

homeTab.addEventListener('click', () => {
    intro.style.display = 'block';
    Certifications.style.display = 'none';
    homeTab.style.color = 'rgb(145, 202, 250)';
    certTab.style.color = 'white'
})

const burgerHome = document.querySelector('.burgerHome')
const burgerCert = document.querySelector('.burgerCert')

burgerHome.addEventListener('click', () => {
    intro.style.display = 'block';
    Certifications.style.display = 'none';
    homeTab.style.color = 'rgb(145, 202, 250)';
    certTab.style.color = 'white'
    burgerMenu.style.right = '-100vw';
})
burgerCert.addEventListener('click', () => {
    intro.style.display = 'none';
        Certifications.style.display = 'flex';
        certTab.style.color = 'rgb(145, 202, 250)'
        homeTab.style.color = 'white'
        burgerMenu.style.right = '-100vw';
})

const html = document.querySelector('.html');
const htmlCert = document.querySelector('.htmlCert')

html.addEventListener('mouseover', () => {
    console.log('hovered')
    htmlCert.style.visibility = 'visible';
    htmlCert.style.width = '80vw';
    html.style.color = 'rgb(145, 202, 250)';
})
html.addEventListener('mouseout', () => {
    htmlCert.style.visibility = 'hidden';
    htmlCert.style.width = '0vw'
    html.style.color = 'white'
})
const css = document.querySelector('.css');
const cssCert = document.querySelector('.cssCert');

css.addEventListener('mouseover', () => {
    cssCert.style.visibility = 'visible';
    cssCert.style.width = '80vw';
    css.style.color = 'rgb(145, 202, 250)';
})
css.addEventListener('mouseout', () => {
    cssCert.style.visibility = 'visible';
    cssCert.style.width = '0'
    css.style.color = 'white';
})

const js = document.querySelector('.JS');
const jsCert = document.querySelector('.jsCert');

js.addEventListener('mouseover', () => {
    jsCert.style.visibility = 'visible';
    jsCert.style.width = '80vw';
    js.style.color = 'rgb(145, 202, 250)';
});
js.addEventListener('mouseout', () => {
    jsCert.style.visibility = 'hidden';
    jsCert.style.width = '0'
    js.style.color = 'white';
});

const contact = document.querySelector('.contact');
contactStatus = 'unclicked';

const defaultCard = document.createElement('span')
defaultCard.innerHTML = 'Contact Me'
contact.appendChild(defaultCard)
const card = document.createElement('div')



contact.addEventListener('click', () => {
    if (contactStatus === 'unclicked') {
        contact.removeChild(defaultCard)
    
    card.innerHTML = `<span>Charlie Kopenhaver</span> <span>pancakeprograms@gmail.com</span> <span>(717)406-7712</span>`
    contact.appendChild(card)
    contact.style.width = '250px'
    contact.style.height = '150px'
    card.classList.add('card')
    contactStatus = 'clicked'
    console.log('opened')
    return;
    } 
    if (contactStatus === 'clicked'){
        console.log('remove child')
        contact.removeChild(card)
        contact.appendChild(defaultCard)
        contact.style.width = '120px'
        contact.style.height = '30px'
        contactStatus = 'unclicked'
    }
})