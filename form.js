const form = document.getElementById('form');
const first = form.elements['first'];
const last = form.elements['last'];
const num = form.elements['num'];
const resultsDiv = document.getElementById('result');


function check() {
    const firstResult = first.value; 
    const lastResult = last.value;
    const numResult = num.value;

    if (firstResult === "" || lastResult === "" || numResult === "") {
        alert("Please fill out all of the required fields");
        return false; //this does work and makes it return false
    }

    form.addEventListener('submit', function(event) {
    if (!check()) {
        event.preventDefault();
    }
});

    resultsDiv.innerHTML += '<tr>' + '<td>' + firstResult + '</td>' + '<td>' + lastResult + '</td>' + '<td>' + numResult + "<button class = '<button'>Hello</button>" + '</td>' + '</tr>'

    first.value = "";
    last.value = "";
    num.value = "";   
};

