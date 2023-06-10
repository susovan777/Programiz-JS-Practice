// Write a function to replace characters of a string
    // the replace() method is used to replace the specified string with another string.

let str = 'Mr Red has a red house and a red car';

let newStr = str.replace('red', 'blue');

console.log(newStr);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// a regex expression is used as the first parameter inside the replace() method. /g refers to global. It means that all the matching characters in the string are replaced.

    let regex = /red/g;

    let newText = str.replace(regex, 'blue');

    console.log(newText);
    