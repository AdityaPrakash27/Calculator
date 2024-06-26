const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';
let operator = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.textContent));
});

clearButton.addEventListener('click', clearDisplay);
equalsButton.addEventListener('click', performCalculation);

function handleButtonClick(value) {
    if (value >= '0' && value <= '9') {
        currentInput += value;
    } else if (value === '.' && !currentInput.includes('.')) {
        currentInput += value;
    } else if (value === 'C') {
        clearDisplay();
    } else if (value === '=') {
        performCalculation();
        operator = '';
    } else {
        if (currentInput !== '') {
            if (operator !== '') {
                performCalculation();
            } else {
                result = currentInput;
            }
            operator = value;
            currentInput = '';
        }
    }
    display.value = `${result} ${operator} ${currentInput}`;
}



function performCalculation() {
    if (currentInput !== '') {
        if (operator === '+') {
            result = (parseFloat(result) + parseFloat(currentInput)).toString();
        } else if (operator === '-') {
            result = (parseFloat(result) - parseFloat(currentInput)).toString();
        } else if (operator === '*') {
            result = (parseFloat(result) * parseFloat(currentInput)).toString();
        } else if (operator === '/') {
            result = (parseFloat(result) / parseFloat(currentInput)).toString();
        } else {
            result = currentInput;
        }
    }
    currentInput = '';
    operator = '';
    display.value = result;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    result = '';
    display.value = '';
}
