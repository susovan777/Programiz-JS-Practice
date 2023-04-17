// Find the square root of a number

function squareRoot(num){
    console.log(Math.sqrt(num));
    // return Math.sqrt(num);
}

function sqRoot(n){
    let sqR;
    for(let i = 1; i < n; i++){
        if(n % i == 0 && n / i == i){
            sqR = i;
        }
    }
    console.log(sqR);
    // return sqR;
}

// squareRoot(9);
// console.log(squareRoot(9));

sqRoot(16);
sqRoot(23);
// sqRoot(100);
