let numberDisplay = document.getElementById("displayNumbers");

let currentInput = ``;
let previousInput = ``;
let lastOperator = ``;

function inputNumbers(value) {
  currentInput += value;
  numberDisplay.value = currentInput;
}

function clearWindow() {
  numberDisplay.value = ``;
  currentInput = ``;
  previousInput = ``;
  lastOperator = ``;
}
function deleteNumber() {
  currentInput = currentInput.slice(0, -1);
  numberDisplay.value = currentInput;
}

function calculate(operator) {
  if (currentInput === "") {
    return;
  }
  if (previousInput !== "") {
    calculateResult();
  }
  lastOperator = operator;
  previousInput = currentInput;
  currentInput = "";
  numberDisplay.value = operator;
}

function calculateResult() {
  let result = 0;
  let currentNumber = parseInt(currentInput);
  let previousNumber = parseInt(previousInput);

  if (lastOperator === `+`) {
    result = currentNumber + previousNumber;
  } else if (lastOperator === `-`) {
    result = previousNumber - currentNumber;
  } else if (lastOperator === `/`) {
    result = previousNumber / currentNumber;
  } else if (lastOperator === `*`) {
    result = currentNumber * previousNumber;
  }

  numberDisplay.value = result;
  lastOperator = null;
  currentInput = result;
  previousInput = "";
}
