const form = document.getElementById('form');
const first = form.elements['first'];
const last = form.elements['last'];
const num = form.elements['num'];
const resultsDiv = document.getElementById('result');
const submit = document.getElementById('submit');
const close = document.querySelector('.close');

let rowIdCounter = 0;

const data = [];

console.log('hello world')

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
        <td contenteditable>${firstResult}</td>
        <td contenteditable>${lastResult}</td>
        <td contenteditable>${numResult}
    </tr>
    `;

    if (form.style.visibility === 'visible' || form.style.visibility === '') {
        form.style.visibility = "hidden";
    }
//this resets the form inputs to nothing to get ready for your next entry
    first.value = "";
    last.value = "";
    num.value = "";  
}

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

      //This makes the list disappear when the user clicks outside of the list.
      document.addEventListener('click', function(event) {
        if (event.autocompleteList !== autocompleteList) {

            autocompleteList.style.visibility = 'hidden';
        }
      })
    });
  });
// Add event listeners to the table cells for editing
resultsDiv.addEventListener('input', function(event) {
    const target = event.target;
    if (target.tagName === 'TD') {
      const rowIndex = target.parentElement.rowIndex;
      const columnIndex = target.cellIndex;
      const newValue = target.textContent;
  
      // Update the data array
      if (columnIndex === 0) {
        data[rowIndex].value = `${newValue} ${data[rowIndex].value.split(' ')[1]} ${data[rowIndex].value.split(' ')[2]}`;
      } else if (columnIndex === 1) {
        data[rowIndex].value = `${data[rowIndex].value.split(' ')[0]} ${newValue} ${data[rowIndex].value.split(' ')[2]}`;
      } else if (columnIndex === 2) {
        data[rowIndex].value = `${data[rowIndex].value.split(' ')[0]} ${data[rowIndex].value.split(' ')[1]} ${newValue}`;
      }
    }
  });
