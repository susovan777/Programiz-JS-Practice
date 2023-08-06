// JavaScript Program to Find Sum of Natural Numbers Using Recursion

function sum(n) {
    if(n == 1) return 1;
    return n + sum(n-1);
}

console.log(sum(5));
console.log(sum(10));
console.log(sum(20));