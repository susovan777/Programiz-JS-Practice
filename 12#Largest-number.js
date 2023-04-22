// Check the largest number among 3 numbers

function largestNum(a, b, c){
    let endStr = " is the largest number.";
    if(a > b){
        if(a > c) console.log(a + endStr);
        else console.log(c + endStr);
    } else if(b > c) {
        console.log(b + endStr);
    } else console.log(c + endStr);
}

largestNum(10, 12, 14);
largestNum(20, 15, 10);
largestNum(10, 30, 9);