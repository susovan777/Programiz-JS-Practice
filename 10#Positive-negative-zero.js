// Check if any number is positive, negative or zero

function checkNumber(num){
    if(num > 0) console.log(num + " is positive number.");
    else if(num < 0) console.log(num + " in negative number.");
    else console.log(num + " is a zero");
}

checkNumber(20);
checkNumber(-20);
checkNumber(0);