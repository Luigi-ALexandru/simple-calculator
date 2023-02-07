alert("You will be asked to write two numbers that you can add, subtract, divide or multiply")

let num1 = +prompt("Insert a number:");
let num2 = +prompt("And another:");

let num1El = document.getElementById("num1-el");
let num2El = document.getElementById("num2-el");

num1El.textContent = num1;
num2El.textContent = num2;

function add() {
    let result = num1 + num2;
    document.getElementById("addition").textContent = result;
};
function subtract() {
    let result = num1 - num2;
    document.getElementById("subtraction").textContent = result;
};
function multiply() {
    let result = num1 * num2;
    document.getElementById("multiplication").textContent = result;
};
function divide() {
    let result = num1 / num2;
    document.getElementById("division").textContent = result;
};

function reset() {

    num1 = +prompt("Insert a number:");
    num2 = +prompt("And another:");

    num1El = document.getElementById("num1-el");
    num2El = document.getElementById("num2-el");

    num1El.textContent = num1;
    num2El.textContent = num2;

};
