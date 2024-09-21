const form = document.getElementById('form');
const first = form.elements['first'];
const last = form.elements['last'];
const result = form.elements['result'];

function checkResult(event) {
    event.preventDefault();
    const firstResult = first.value;
    const lastResult = last.value;
    //for some reason this result.value is only showing first
    //for later, fix the + lastResult;
    result.value = firstResult +  lastResult;
}

form.addEventListener('submit', checkResult);

checkResult();