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
})
js.addEventListener('mouseout', () => {
    jsCert.style.visibility = 'hidden';
    jsCert.style.width = '0'
    js.style.color = 'white';
})