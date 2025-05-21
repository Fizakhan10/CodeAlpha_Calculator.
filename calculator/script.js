const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            currentInput = "";
            previousInput = "";
            operator = "";
            display.value = "";
        } else if (value === "=") {
            if (currentInput && operator) {
                currentInput = eval(previousInput + operator + currentInput);
                display.value = currentInput;
                operator = "";
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            operator = value;
            previousInput = currentInput;
            currentInput = "";
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
