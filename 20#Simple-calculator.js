// Create a simple calculator

function calculator(oprnd1, oprnd2, operator) {
    // const prompt = require('prompt-sync')();

    // let oprnd1 = prompt("Enter the first operand: ");
    // let oprnd2 = prompt("Enter the second operand: ");
    // let operator = prompt("Enter the operator (ex: +, -, *, /, %): ");
    let result;

    switch(operator) {
        case "+":
            result = oprnd1 + oprnd2;
            break;
        case "-":
            result = oprnd1 - oprnd2;
            break;
        case "*":
            result = oprnd1 * oprnd2;
            break;
        case "/":
            result = oprnd1 / oprnd2;
            break;
        case "%":
            result = oprnd1 % oprnd2;
            break;
        default:
            result = "Invalid input";
    }

    console.log(result);
}

calculator(10, 5, '+');
calculator(10, 5, '-');
calculator(10, 5, '*');
calculator(10, 5, '/');
calculator(10, 5, '%');

