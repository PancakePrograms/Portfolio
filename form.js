const form = document.getElementById('form');
const first = form.elements['first'];
const last = form.elements['last'];
const num = form.elements['num'];
const resultsDiv = document.getElementById('result');
const submit = document.getElementById('submit');

let rowIdCounter = 0;

const data = [];



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
        
    
    
const rowId = `row-${rowIdCounter}`;
rowIdCounter++;

    data.push({
        value: `${firstResult} ${lastResult} ${numResult}`
    });

    resultsDiv.innerHTML += `
    <tr id="${rowId}">
        <td>${firstResult}</td>
        <td>${lastResult}</td>
        <td>${numResult} <button class="Delete" onclick="deleteRow('${rowId}')">Delete</button></td>
    </tr>
    `;

    if (form.style.visibility === 'visible' || form.style.visibility === '') {
        form.style.visibility = "hidden";
    }

    first.value = "";
    last.value = "";
    num.value = ""; 
    
};

function deleteRow(rowId) {
    const row = document.getElementById(rowId);
    row.parentNode.removeChild(row);
}

function add() {
    form.style.visibility = "visible";
}

function handleClose(event) {
    event.preventDefault();
    form.style.visibility = "hidden";
    searchInput.value = "";
    autocompleteList.innerHTML = "";
}

const searchInput = document.getElementById('searchInput');
const autocompleteList = document.getElementById('autocompleteList');

searchInput.addEventListener('input', () => {
    // Clear the autocomplete list
    autocompleteList.innerHTML = '';
    autocompleteList.style.visibility = 'visible';
  
    // Filter the data based on the search value
    const searchValue = searchInput.value.toLowerCase();
    const filteredData = data.filter(item => item.value.toLowerCase().startsWith(searchValue));
  
    // Populate the autocomplete list with the filtered data
    filteredData.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.value;
      autocompleteList.appendChild(listItem);

      
      document.addEventListener('click', function(event) {
        if (event.autocompleteList !== autocompleteList) {

            autocompleteList.style.visibility = 'hidden';
        }
      })
    });
  });