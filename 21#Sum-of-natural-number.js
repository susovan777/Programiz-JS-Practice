// Calculate the sum of n natural number
// formula, sum = n(n + 1)/2

function sumOfNumbers(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}

sumOfNumbers(5);
sumOfNumbers(10);