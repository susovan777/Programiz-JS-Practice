
// To check any sub-string in a given string we can use includes() and indexOf() method

let myStr = "The quick brown fox jumps over the lazy dog";

// let hasSubStr = myStr.includes('fox'); // true
let hasSubStr = myStr.includes('blue'); // false

// if searching sub-string is not in a string return -1
let hasSubStr2 = myStr.indexOf('the'); // returns index
// let hasSubStr2 = myStr.indexOf('red'); // returns -1

console.log(hasSubStr);
console.log(hasSubStr2);
