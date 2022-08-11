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
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '÷') {
        return divide(a, b);
    } else {
        return alert('ERROR');
    }
}

function displayOperand() {
    const currentOperand = document.querySelector('.current-operand');
    const previousOperand = document.querySelector('.previous-operand');
    const equals = document.querySelector('#equals');
    const number = document.querySelectorAll('#number');
    const operator = document.querySelectorAll('#operator');
    const del = document.querySelector('#delete');
    const allClear = document.querySelector('#all-clear');
    let sign = '';

    number.forEach(num => {
        num.addEventListener('click', () => {
            if (num.textContent === '.' && currentOperand.textContent.includes('.')) return;
            currentOperand.textContent += num.textContent;
        });
    });

    //When the delete key is pressed, the current operand is sliced by 1
    del.addEventListener('click', () => {
        currentOperand.textContent = currentOperand.textContent.slice(0, -1);
    });

    //When AC is clicked, all inputs are cleared
    allClear.addEventListener('click', () => {
        currentOperand.textContent = '';
        previousOperand.textContent = '';
    });


    operator.forEach(op => {
        op.addEventListener('click', () => {
            if (op.textContent === '+') {
                previousOperand.textContent = `${currentOperand.textContent} +`;
                sign = '+';
                currentOperand.textContent = '';
            } else if (op.textContent === '-') {
                previousOperand.textContent = `${currentOperand.textContent} -`;
                sign = '-';
                currentOperand.textContent = '';
            } else if (op.textContent === '*') {
                previousOperand.textContent = `${currentOperand.textContent} *`;
                sign = '*';
                currentOperand.textContent = '';
            } else if (op.textContent === '÷') {
                previousOperand.textContent = `${currentOperand.textContent} ÷`;
                sign = '÷';
                currentOperand.textContent = '';
            }
        });
    });


    equals.addEventListener('click', () => {
        previousOperand.textContent += ` ${currentOperand.textContent}`;
        currentOperand.textContent = operate(sign, parseFloat(previousOperand.textContent), parseFloat(currentOperand.textContent));
    });

}

displayOperand();

//When number is pressed, it is shown on display ✅
//when del is pressed, remove most recent number pressed✅
//when operator is pressed, number on display is sent to the top along with operator ✅
//enter another number and when equals is pressed, number is sent to top and calculation is made✅
//calculation should now show on main display✅
//calculation number is stored and user can repeat previous steps✅
//user can also hit the all clear to reset back to state where no numbers/calculations are stored✅


//FOR FUTURE ALEC
//When equals is clicked
    //number needs to be stored
    //if a number button is clicked,
        //clear whats on the display instead of adding it on to the current number
    //if operator is clicked then number is moved to top of display
    
