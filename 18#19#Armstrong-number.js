// Check a given number is armstrong number or not

function isArmstrong(num) {
    let temp = String(num);
    let n = temp.length;
    let sum = 0;
    while (temp > 0) {
        let R = temp % 10;
        // console.log(R);
        // digits.push(R);
        sum += R ** n;
        temp = Math.floor(temp / 10);
    }

    if (sum == num) console.log(`Yes, ${num} is an Armstrong number`);
    else console.log(`No, ${num} is not an Armstrong number`);
}

/*
isArmstrong(1);
isArmstrong(153);
isArmstrong(239);
isArmstrong(1634);
isArmstrong(92727);
*/

// -----------------------------------------------------------                                        ---------------------------------------------
// Print all the Armstrong number in a given interval

function allArmstrong(low, high) {
    console.log(`All the Armstrong number between ${low} & ${high} is: \n`);
    
    for (let i = low; i <= high; i++) {
        let temp = String(i);
        let order = temp.length;
        let sum = 0;
        while(temp > 0) {
            let R = temp % 10;
            sum += R ** order;
            temp = parseInt(temp / 10);
        }
        if(sum == i) console.log(i);
    }
}

allArmstrong(200, 500);
// allArmstrong(400, 10000);