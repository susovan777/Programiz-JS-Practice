//  Program to check wheather any string start and end with certain string 
    // There are methods called startsWith() and endsWith() 

function checkStr(str){
    if(str.startsWith('S') && str.endsWith('g')) return true;
    else return false;
}

console.log(checkStr("String"));
console.log(checkStr("hello"));

