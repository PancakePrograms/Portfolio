//Change everything into a tabel


const form = document.getElementById('form');
const first = form.elements['first'];
const last = form.elements['last'];
const result = form.elements['result'];

function checkResult(event) {
    event.preventDefault();
    const firstResult = first.value;
    const lastResult = last.value;
    result.value += firstResult + " " + lastResult + lineBreak;

form.addEventListener('submit', checkResult);;
    
    first.value = ""
    last.value = ""
}

form.addEventListener('submit', checkResult);

checkResult();