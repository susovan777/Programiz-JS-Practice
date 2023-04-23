// Check a given number is prime or not

function isPrimeNum(num) {
    let isPrime = true;

    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        } else isPrime = true;
    }
 
    if (isPrime) console.log("Yes, " + num + " is a prime number.");
    else console.log("No, " + num + " is not a prime number.");

}

isPrimeNum(2);
isPrimeNum(12);
isPrimeNum(19);
isPrimeNum(37);
isPrimeNum(50);
isPrimeNum(90);