// CHeck occurance of a character in a given string

function countChar(str, letter) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == letter) count += 1;
    }
    console.log(count);
}

countChar('school', 'o');
countChar('abc bde fbg hib', 'b');