// Print the ASCII value of any character
    // The 🔹codePointAt() & charCodeAt() methods are used to find the ASCII value of a character. This menthode returns a Unicode code point value.

function asciiValue(c) {
    return c.charCodeAt();
}

console.log(asciiValue("A"));
console.log(asciiValue("bac"));
console.log(asciiValue("Z"));

// Print the character from ASCII value
    // the 🔹String.fromCharCode() methode is used to get character from ASCII value

function getChar(n) {
    return String.fromCharCode(n);
}

console.log(getChar(68));
console.log(getChar(100));
console.log(getChar(93));
