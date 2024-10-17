let happiness = 100;
let hunger = 75;
let bathroom = 30;
let cleanliness = 60;
const stats = document.getElementById('stats');
const poop = document.querySelector('.poop')
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
      poop.style.visibility = "visible"
      clearInterval(poopInterval);
    }
    
    if(poop.style.visibility === 'visible') {
      const sick = setInterval(() =>{
        cleanliness -= 20;
        console.log(cleanliness)
        
        if(cleanliness < 1) {
          clearInterval(sick)
          cleanliness = 60;
          return;
        }
      }, hour);
    }

    updateStats();
  }, 1000);

  updateStats();
};

const clean = () => {
  cleanliness += 75;
  poop.style.visibility = "hidden";
  cleanliness = Math.min(cleanliness, 100);
  updateStats();
};

const fullDay = 24 * 60 * 60 * 1000;
const hour = 1 * 60 * 60 * 1000;

setInterval(() => {
  hunger -= 8;

  if (hunger < 0) {
    life = 0;
  }

  if (life === 0) {
    console.log('dead')
    hunger+=75
    life+=1
    return;
  }

  updateStats();
}, hour);

setInterval(() => {
  happiness -= 12;
  updateStats();
}, hour);


updateStats();