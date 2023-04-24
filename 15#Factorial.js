// Find the factorial of a number 
// 5! = 5 . 4 . 3 . 2 . 1 = 120

function factorial(n) {
    let fact = 1;
    for(let i = n; i >= 1; i--) {
        fact *= i;
    }
    console.log(fact);
}

factorial(5);
factorial(1);
