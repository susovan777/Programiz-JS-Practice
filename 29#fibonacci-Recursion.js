// JavaScript Program to Display Fibonacci Sequence Using Recursion
// 0, 1, 1, 2, 3, 5, 8, 13, 21,.....
// Fibonacci number of nth Term using Recursion
function Fibonacci(n) {
    if(n < 2) return n;
    else return Fibonacci(n-1) + Fibonacci(n-2);
}

console.log(Fibonacci(6));




/*
Steps >>>

Fibonacci(6)
    Fibonacci(5) + Fibonacci(4)
        Fibonacci(4) + Fibonacci(3) + Fibonacci(3) + Fibonacci(2)
            Fibonacci(3) + Fibonacci(2) + Fibonacci(2) + Fibonacci(1) + Fibonacci(2) + Fibonacci(1) + Fibonacci(1) + Fibonacci(0)
                Fibonacci(2) + Fibonacci(1) + Fibonacci(1) + Fibonacci(0) + Fibonacci(1) + Fibonacci(0) + 1 + 1 + 1 + 1
                    1 + 1 + 6
                    8
*/

