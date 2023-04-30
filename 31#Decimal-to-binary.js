// Program to decimal number to Binary number

function deciToBinary(n) {
    let R;
    let bin = "";
    // getting the binary digits as a string
    while(n > 0) {
        R = n % 2;
        n = parseInt(n / 2);
        // console.log(R);
        bin += R;
    }

    // reverse the digits and printing binary number
    let rev = "";
    for(let i = bin.length - 1; i >= 0; i--) {
        rev += bin[i];
    }
    console.log(Number(rev));
}

// Program to Binary number to decimal number

function binToDec(n) {
    numL = String(n);
    let rem;
    let sum = 0;
    for(let i = 0; i < numL.length; i++) {
        rem = n % 10;
        n = parseInt(n / 10);
        sum = sum + rem * (2 ** i);
    }
    console.log(sum);
}

binToDec(1100);
binToDec(1001011);
binToDec(10010);
binToDec(10100);
binToDec(1001);

deciToBinary(12);
deciToBinary(9);
deciToBinary(75);
deciToBinary(18);
deciToBinary(20);
