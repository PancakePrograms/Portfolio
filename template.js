const burger = document.querySelector('.burger');
const topBar = document.querySelector('.burger :nth-child(1)');
const middleBar = document.querySelector('.burger :nth-child(2)');
const bottomBar = document.querySelector('.burger :nth-child(3)');
const sideBar = document.querySelector('.sideBar');
const x = 'false';

function open_sideBar() {
    topBar.style.transform = 'translateY(8px) rotate(45deg)';
    bottomBar.style.transform = 'translateY(-8px) rotate(-45deg)';
    middleBar.style.opacity = '0';
    sideBar.style.left = '0';
}

function close_sideBar() {
    topBar.style.transform = 'translateY(0) rotate(0deg)';
    bottomBar.style.transform = 'translateY(0) rotate(0deg)';
    middleBar.style.opacity = '1';
    sideBar.style.left = '-100%';
}

burger.addEventListener('click', () => {
    if(middleBar.style.opacity === '1' || middleBar.style.opacity === '') {
    open_sideBar();
    } else {
        close_sideBar();
    }
})