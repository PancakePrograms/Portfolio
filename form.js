const form = document.getElementById('form');
const first = form.elements['first'];
const last = form.elements['last'];
const resultsDiv = document.getElementById('result');

function check() {
    const firstResult = first.value; 
    const lastResult = last.value;
    resultsDiv.innerHTML += '<tr>' + '<td>' + firstResult + '</td>' + '<td>' + lastResult + '</td>' + '</tr>';
// Add Age. Turn form into a popup window. Add a delete option for new objects.
    first.value = "";
    last.value = "";
}

form.addEventListener('submit', checkResult);