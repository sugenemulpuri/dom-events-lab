
/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let firstOperand = '';
let operator = '';
let secondOperand = '';
let result = '';

/*------------------------ Cached Element References ------------------------*/

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');


/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (!isNaN(buttonText) || buttonText === '.') {
      currentInput += buttonText;
    } else if (buttonText === 'C') {
      clear();
    } else if (buttonText === '=') {
      evaluate();
    } else {
      handleOperator(buttonText);
    }

    updateDisplay();
  });
});

/*-------------------------------- Functions --------------------------------*/

function updateDisplay() {
  display.textContent = currentInput;
}


function handleOperator(op) {
  if (operator === '') {
    firstOperand = currentInput;
    currentInput = '';
    operator = op;
  } else {
    secondOperand = currentInput;
    evaluate();
    firstOperand = result;
    currentInput = '';
    operator = op;
  }
}


function evaluate() {
  if (operator === '+') {
    result = parseFloat(firstOperand) + parseFloat(currentInput);
  } else if (operator === '-') {
    result = parseFloat(firstOperand) - parseFloat(currentInput);
  } else if (operator === '*') {
    result = parseFloat(firstOperand) * parseFloat(currentInput);
  } else if (operator === '/') {
    result = parseFloat(firstOperand) / parseFloat(currentInput);
  }

  currentInput = result.toString();
  operator = '';
}

function clear() {
  currentInput = '';
  firstOperand = '';
  operator = '';
  secondOperand = '';
  result = '';
}