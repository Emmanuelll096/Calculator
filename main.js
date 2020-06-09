//////////////////////////////////// SELECTORS ////////////////////////////////////

let numKeys = document.querySelectorAll('.numbers');
let opKeys = document.querySelectorAll('.operator');
let clearBtn = document.getElementById('clear')
let deleteBtn = document.getElementById('delete')
let sumBtn = document.getElementById('equals')
////////////////////////////////// FUNCTIONS //////////////////////////////////////
function displayValue() {
  for (let i = 0; i < numKeys.length; i++) {
    numKeys[i].addEventListener('click', function () {
      if (document.querySelector('.calc-display').value === '0') {
        document.querySelector('.calc-display').value = '';
      };
      document.querySelector('.calc-display').value += numKeys[i].value;
    })
  }
  for (let i = 0; i < opKeys.length; i++) {
    opKeys[i].addEventListener('click', function () {
      document.querySelector('.calc-display').value += opKeys[i].value;
    })
  }
}

function clearNumber() {
  clearBtn.addEventListener('click', function () {
    document.querySelector('.calc-display').value = '0'
  })
}

function deleteNumber() {
  deleteBtn.addEventListener('click', function () {
    let deleteArr = document.querySelector('.calc-display').value.split('')
    if (deleteArr.length === 1) {
      document.querySelector('.calc-display').value = '0';
    } else {
      deleteArr.splice(-1, 1)
      document.querySelector('.calc-display').value = '';
      document.querySelector('.calc-display').value += deleteArr.join('');
    }

  })
}

///////////////////////////////////// ARITHMETIC /////////////////////////////////////////////////


function calculate() {
  sumBtn.addEventListener('click', function () {
    let result = document.querySelector('.calc-display').value.split('');

    if (result[1] === '+') {
      document.querySelector('.calc-display').value = parseInt(result[0]) + parseInt(result[2])
    }
    else if (result[1] === '-') {
      document.querySelector('.calc-display').value = result[0] - result[2];

    }
    else if (result[1] === '/') {
      document.querySelector('.calc-display').value = result[0] / result[2];

    }
    else if (result[1] === '*') {
      document.querySelector('.calc-display').value = result[0] * result[2];
    }
  })

}

displayValue();
clearNumber();
deleteNumber();
calculate();

