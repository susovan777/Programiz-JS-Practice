// Change the first letter of a string to upper case

function changeCase(str) {
    let firstLetter = str[0];
    let subString = str.substring(1);

    console.log(firstLetter.toUpperCase() + subString);
}

changeCase('hello');
changeCase('susovan');
changeCase('sahoo');