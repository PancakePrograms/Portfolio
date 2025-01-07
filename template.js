const burger = document.querySelector('.burger');
const topBar = document.querySelector('.burger :nth-child(1)');
const middleBar = document.querySelector('.burger :nth-child(2)');
const bottomBar = document.querySelector('.burger :nth-child(3)');
const sideBar = document.querySelector('.sideBar');
const x = 'false';
const rewards = document.querySelector('.reward');
const content = document.querySelector('.content');
const home = document.querySelector('.Home');
const rewardPage = document.querySelector('.rewards_section')

rewards.addEventListener('click', () => {
    if (rewardPage.style.display == 'none' || rewardPage.style.display === '') {
    
        content.style.display = 'none';
        home.style.color = 'black';
        rewards.style.color = 'white';
        rewardPage.style.display = 'flex';
        shop.style.display = 'none';
        order.style.color = 'black';
    };
});
home.addEventListener('click', () => {
  if (content.style.display === 'none') {
  content.style.display = 'flex';
  rewardPage.style.display = 'none';
  rewards.style.color = 'black';
  home.style.color = 'white';
  shop.style.display = 'none';
  order.style.color = 'black';
  }
})
const order = document.querySelector('.Order');
const shop = document.querySelector('.order_section');
order.addEventListener('click', () => {
    if (shop.style.display === 'none' || shop.style.display === '') {
        shop.style.display = 'flex';
        order.style.color = 'white';
        content.style.display = 'none';
        rewardPage.style.display = 'none';
        rewards.style.color = 'black';
        home.style.color = 'black';
    }
})



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

let pointVal = 100; 
const redeem = document.querySelector('.rewards_section button')
let minPoint = 0
function updatePoints() {
  document.getElementById('point_root').innerHTML = pointVal + " Points";
  console.log("points")
  if(pointVal >= 200) {
    console.log("redeem available")
    redeem.style.backgroundColor = "orange";
  } else {
    redeem.style.backgroundColor = '#9F9D9A';
  }
  if (pointVal < minPoint) {
    pointVal = minPoint;
  }
}
redeem.addEventListener('click', () => {
  if (pointVal >= 200) {
    pointVal -= 200;
    redeem.style.backgroundColor = '#9F9D9A';
    updatePoints();
  }
});

updatePoints();

document.getElementById('increase').addEventListener('click', () => {
  pointVal += 25;
  updatePoints();
});

document.getElementById('decrease').addEventListener('click', () => {
  if(pointVal <= 0) {
    pointVal = 0;
    updatePoints();
    return
  } else {
  pointVal -= 25;
  updatePoints();
  }
});

