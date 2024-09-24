//Change everything into a tabel


const form = document.getElementById('form');
const first = form.elements['first'];
const last = form.elements['last'];
const resultsDiv = document.getElementById('result');

function check() {
    const firstResult = first.value; 
    const lastResult = last.value;
<<<<<<< HEAD
    resultsDiv.innerHTML += '<tr>' + '<td>' + firstResult + '</td>' + '<td>' + lastResult + '</td>' + '</tr>';
// Add Age. Turn form into a popup window. Add a delete option for new objects.
    first.value = "";
    last.value = "";
=======
    result.value += firstResult + " " + lastResult + lineBreak;

form.addEventListener('submit', checkResult);;
    
    first.value = ""
    last.value = ""
>>>>>>> 04b1e88ad34d73f00cd890a251c6f973a91eec86
}

form.addEventListener('submit', checkResult);