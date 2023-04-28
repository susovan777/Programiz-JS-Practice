// Take 2 or 3 input from user and check wheather number has same last digit

function isSameLastDigit(n1, n2, n3){
    let R1 = n1 % 10;
    let R2 = n2 % 10;
    let R3 = n3 % 10;

    if(R1 == R2 && R1 == R3) console.log(`Yes, ${n1}, ${n2} and ${n3} has same last digit.`);
    else console.log("No, inputs numbers does not has same last digit.");
}

isSameLastDigit(3, 23, 103);
isSameLastDigit(3, 24, 103);