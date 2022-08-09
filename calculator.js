function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return subtract(a, b);
    }
    else if (operator === '*') {
        return multiply(a, b);
    }
    else if (operator === '÷') {
        return divide(a, b);
    }
    else {
        return alert('ERROR');
    }
}

function displayOperand() {
    const currentOperand = document.querySelector('.current-operand');
    const number = document.querySelectorAll('#number');

    number.forEach(num => {
        num.addEventListener('click', function(){
            if(num.textContent === '.' && currentOperand.textContent.includes('.')) return; 
            currentOperand.textContent += num.textContent;
        });
    });
}

function updateDisplay() {

}

displayOperand();