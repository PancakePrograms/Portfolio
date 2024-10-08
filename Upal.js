let happiness = 100
let hunger = 75
let bathroom = 30
let cleanliness = 60
const stats = document.getElementById('stats')
let life = 1

if (happiness > 100) {
    happiness = 100;
}
if (hunger > 100) {
    hunger = 100;
}
if (bathroom > 100) {
    bathroom = 100;
}
if (cleanliness > 100) {
    cleanliness = 100;
}
stats.innerHTML = 
"Happiness: " + happiness + '<br>' +
"Hunger: " + hunger + '<br>' +
    "Bathroom: " + bathroom + '<br>' +
"Cleanliness: " + cleanliness;


const fullDay = 24 * 60 * 60 * 1000;
const halfDay = 12 * 60 * 60 * 1000;

setInterval(function() {
    stats.innerHTML = 
"Happiness: " + happiness + '<br>' +
"Hunger: " + hunger + '<br>' +
    "Bathroom: " + bathroom + '<br>' +
"Cleanliness: " + cleanliness;


hunger -= 8;
cleanliness -= 4;

if (hunger < 0) {
    life = 0;
}

if (cleanliness < 0) {
    life = 0;

}
if (life === 0) {
    //this will do something more dramatic later
    stats.innerHTML = 'dead';
}

}, halfDay);

setInterval(function() {
    stats.innerHTML = 
"Happiness: " + happiness + '<br>' +
"Hunger: " + hunger + '<br>' +
    "Bathroom: " + bathroom + '<br>' +
"Cleanliness: " + cleanliness;

happiness -= 8;
}, halfDay);