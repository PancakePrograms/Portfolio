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
        
    
    //this pushes the data from the form into the table
const rowId = `row-${rowIdCounter}`;
rowIdCounter++;

    data.push({
        value: `${firstResult} ${lastResult} ${numResult}`
    });

    resultsDiv.innerHTML += `
    <tr id="${rowId}">
        <td>${firstResult}</td>
        <td>${lastResult}</td>
        <td>${numResult}
    </tr>
    `;

    if (form.style.visibility === 'visible' || form.style.visibility === '') {
        form.style.visibility = "hidden";
    }
//this resets the form inputs to nothing to get ready for your next entry
    first.value = "";
    last.value = "";
    num.value = ""; 

//this adds an onclick div for each of your form entries
    document.querySelectorAll('#result tbody tr').forEach(row => {
        row.addEventListener('click', () => {
            const firstName = row.querySelector('td:nth-child(1)').textContent;
            const lastName = row.querySelector('td:nth-child(2)').textContent;
            const age = row.querySelector('td:nth-child(3)').textContent;
    
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('entry-div');
            entryDiv.innerHTML = `<h2>${firstName} ${lastName}</h2>
            <p>Age: ${age}</p>
            <button class='button onclick='deleteRow()'>Delete</button>
            `;
    
            document.body.appendChild(entryDiv);
        });
    });
    
};

//this deletes the entry
function deleteRow() {
    document.querySelectorAll('#result tbody td').forEach(row  => {
     row.innerHTML = ''
    })
}''

//this makes the form visible
function add() {
    form.style.visibility = "visible";
}


//this makes the form dissapear
function handleClose(event) {
    event.preventDefault();
    form.style.visibility = "hidden";
    searchInput.value = "";
    autocompleteList.innerHTML = "";
}

//this is our search bar
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

