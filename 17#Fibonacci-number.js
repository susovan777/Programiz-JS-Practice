// Print fibonacci number till a given number
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ....


// Printing Fibonacci number with array
function printFibonacciArr(n) { 
    let series = [0, 1];
    let nextNum;
    for(let i = 2; ; i++) {
        // series[i] = series[i - 1] + series[i - 2];
        nextNum = series[i - 1] + series[i - 2];
        if(nextNum > n) break;
        series.push(nextNum);
    }
    console.log(series);
}

// printFibonacciArr(5);
// printFibonacciArr(50);

// ---------------------------------------------------                      ******                  ------------------------------------------------
// Printing Fibonacci number without array
function printFibonacci(n) {
    let p = 0; // first number
    let q = 1; // second number
    let nextNum;
    console.log(p);
    console.log(q);

    // nextNum = p + q;
    
    for(let i = 1; ; i++) {
        nextNum = p + q;
        p = q;
        q = nextNum;
        if(nextNum > n) break;
        console.log(nextNum);
    }
}

// printFibonacci(5);
// printFibonacci(50);

// --------------------------------------------------------------------------------------------------------------------------------------------
// Print first n numbers of Fibonacci series

function fibonacciSeries(n){
    let n1 = 0;
    let n2 = 1;
    let sum = 0;

    if(n < 1) console.log("Invalid input");
    else if(n == 1) console.log(n1);
    else if(n == 2) {
        console.log(n1);
        console.log(n2);
    } else {
        for(let i = 0; i < n; i++){
            console.log(n1);
            sum = n1 + n2;
            n1 = n2;
            n2 = sum;
        }
    }
}

// fibonacciSeries(5);
fibonacciSeries(10);