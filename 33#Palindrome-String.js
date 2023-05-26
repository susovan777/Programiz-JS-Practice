// A string is said to be palindrome if it remains the same on reading from both ends. 
// It means that when you reverse a given string, it should be the same as the original string.

function isPalindrome(str) {
    let lastIndex = str.length - 1;
    let revStr = "";
    let result = "";

    for (let i = 0; i < str.length; i++) {
        revStr += str[lastIndex - i];
    }

    if(str == revStr) result = `"${str}" is a Palindrome number`;
    else result = `"${str}" is not a Palindrome number`;

    console.log(result);
}

isPalindrome("abcba");
isPalindrome("ab fc ba");