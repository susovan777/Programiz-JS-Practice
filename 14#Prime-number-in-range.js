// Print all the prime number till a given number

/*
function allPrimeNum(num) {
    let isPrime = true;
    let primeNum = [];
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            } else isPrime = true;
        }

        if (isPrime) {
            primeNum.push(i);
        }
    }
    console.log(primeNum);
}

allPrimeNum(5);
allPrimeNum(20);
*/


// Print all the prime number in given interval

function allPrimeNumbers(low, high) {
    let isPrime = true;
    let primeNumbers = [];
    for(let i = low; i <= high; i++){
        for(let j = 2; j < low; j++){
            if(i % j == 0) {
                isPrime = false;
                break;
            } else isPrime = true;
        }
        if (isPrime) {
            primeNumbers.push(i);
        }
    }
    console.log(primeNumbers);
}

allPrimeNumbers(5, 20);
allPrimeNumbers(20, 40);