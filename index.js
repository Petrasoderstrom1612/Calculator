let num1El = document.getElementById("num1-el");
let num2El = document.getElementById("num2-el");
let sumEl = document.getElementById("sum-el");
let operatorEl = document.getElementById("operator");
let operator;

function setOperator(op) {
    operator = op;
    operatorEl.innerText = operator;
}

function calculate() {
    let num1 = parseFloat(num1El.value);
    let num2 = parseFloat(num2El.value);

    if (isNaN(num1) || isNaN(num2) || !operator) {
        alert("Please enter valid numbers and select an operator.");
        return;
    }

    if (operator === '+') {
        plusFnc(num1, num2);
    } else if (operator === '-') {
        minusFnc(num1, num2);
    } else if (operator === '*') {
        multiplyFnc(num1, num2);
    } else if (operator === '/') {
        divideFnc(num1, num2);
    }

}

function plusFnc(num1, num2) {
    let sum = num1 + num2;
    sumEl.innerText = sum;
}

function minusFnc(num1, num2) {
    let sum = num1 - num2;
    sumEl.innerText = sum;
}

function multiplyFnc(num1, num2) {
    let sum = num1 * num2;
    sumEl.innerText = sum;
}

function divideFnc(num1, num2) {
    let sum = num1 / num2;
    sumEl.innerText = sum;
}

function reset() {
    num1El.value = "";
    num2El.value = "";
    operatorEl.innerText = "";
    operator = null;
    sumEl.innerHTML = ""
    sum = null
}