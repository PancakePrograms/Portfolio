const form = document.getElementById('form');
const first = form.elements['first'];
const last = form.elements['last'];
const num = form.elements['num'];
const resultsDiv = document.getElementById('result');


function check() {
    const firstResult = first.value; 
    const lastResult = last.value;
    const numResult = num.value;
    resultsDiv.innerHTML += '<tr>' + '<td>' + firstResult + '</td>' + '<td>' + lastResult + '</td>' + '<td>' + numResult + "<button class = 'button'>Hello</button>" + '</td>' + '</tr>'
    //add a remove entry button. (floating outside the table but inline with the entry it will remove if clicked)
    first.value = "";
    last.value = "";
    num.value = "";
    

    if (firstResult === "") {
        alert('First name is required');
        return false;
    }
}