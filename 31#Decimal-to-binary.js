

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

deciToBinary(12);
deciToBinary(9);
deciToBinary(75);
deciToBinary(18);
deciToBinary(20);