// Helper function to create and append table cells
function createTableCell(value) {
    const cell = document.createElement('td');
    cell.textContent = value;
    return cell;
  }
  
  // Function to fetch data from API 1
  function promiseAPI1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch('https://dummyjson.com/posts')
          .then(response => response.json())
          .then(data => {
            const tableCell = createTableCell(JSON.stringify(data));
            document.getElementById('api1Data').appendChild(tableCell);
            resolve(true);
          });
      }, 1000);
    });
  }
  
  // Function to fetch data from API 2
  function promiseAPI2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch('https://dummyjson.com/products')
          .then(response => response.json())
          .then(data => {
            const tableCell = createTableCell(JSON.stringify(data));
            document.getElementById('api2Data').appendChild(tableCell);
            resolve(true);
          });
      }, 2000);
    });
  }
  
  // Function to fetch data from API 3
  function promiseAPI3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch('https://dummyjson.com/todos')
          .then(response => response.json())
          .then(data => {
            const tableCell = createTableCell(JSON.stringify(data));
            document.getElementById('api3Data').appendChild(tableCell);
            resolve(true);
          });
      }, 3000);
    });
  }
  
  // Event listener for the button click
  document.getElementById('fetchButton').addEventListener('click', () => {
    promiseAPI1()
      .then((result) => {
        if (result) {
          return promiseAPI2();
        }
      })
      .then((result) => {
        if (result) {
          return promiseAPI3();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
  