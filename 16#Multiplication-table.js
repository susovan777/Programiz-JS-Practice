// Multiplication table for a given number

function multiTable(n) {
    for(let i = 1; i <= 10; i++){
        console.log(n + " x " + i + " = " + n*i);
    }
}

multiTable(5);
multiTable(10);