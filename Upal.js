let happiness = 100;
let hunger = 75;
let bathroom = 30;
let cleanliness = 60;
const stats = document.getElementById('stats');
let life = 1;

const updateStats = () => {
  stats.innerHTML = `
    Happiness: ${happiness}%<br>
    Hunger: ${hunger}%
  `;
};

const food = () => {
  hunger += 30;
  hunger = Math.min(hunger, 100);

  if (bathroom < 30) {
    return;
  }

  bathroom -= 1;
  const poopInterval = setInterval(() => {
    bathroom -= 1;

    if (bathroom < 1) {
      bathroom += 30;
      clearInterval(poopInterval);
    }

    updateStats();
  }, 1000);

  updateStats();
};

const clean = () => {
  cleanliness += 75;
  cleanliness = Math.min(cleanliness, 100);
  updateStats();
};

const fullDay = 24 * 60 * 60 * 1000;
const halfDay = 1 * 60 * 60 * 1000;

setInterval(() => {
  hunger -= 8;
  cleanliness -= 4;

  if (hunger < 0 || cleanliness < 0) {
    life = 0;
  }

  if (life === 0) {
    stats.innerHTML = 'dead';
  }

  updateStats();
}, halfDay);

setInterval(() => {
  happiness -= 12;
  updateStats();
}, halfDay);

function cycle() {
const food = document.querySelector('.feed');
const clean = document.querySelector('.clean');
const play = document.querySelector('.play');
const meds = document.querySelector('.meds');

  if (food.style.visibility === 'hidden' || food.style.visibility === '') {
   
    food.style.visibility = 'visible';
    clean.style.visibility = 'hidden';
    play.style.visibility = 'hidden';
    meds.style.visibility = 'hidden';
    return;
}
if (food.style.visibility === 'visible') {
  food.style.visibility = 'hidden';
  play.style.visibility = 'visible';
  return;
}
if (play.style.visibility === 'visible' && food.style.visibility === hidden ) {
  food.style.visibility = 'hidden';
  play.style.visibility = 'hidden';
  clean.style.visibility = 'visible';
  return
}
}

updateStats();