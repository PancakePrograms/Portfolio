const burger = document.querySelector('.burger');
const topBar = document.querySelector('.burger :nth-child(1)');
const middleBar = document.querySelector('.burger :nth-child(2)');
const bottomBar = document.querySelector('.burger :nth-child(3)');
const sideBar = document.querySelector('.sideBar');

burger.addEventListener('click', () => {
    topBar.style.animation = 'topX .5s';
    middleBar.style.animation = 'middleBar .1s linear';
    bottomBar.style.animation = 'bottomX .5s';
    sideBar.style.animation = 'slideIn .5s';
   
});

topBar.addEventListener('animationend', () => {
    topBar.style.transform = 'rotate(45deg)';
    topBar.style.position = 'absolute';
    
})

middleBar.addEventListener('animationend', () => {
    middleBar.style.visibility = 'hidden';
})

bottomBar.addEventListener('animationend', () => {
    bottomBar.style.transform = 'rotate(-45deg)';
    bottomBar.style.position = 'absolute';
})
sideBar.addEventListener('animationend', () => {
    sideBar.style.left = '0';
});
