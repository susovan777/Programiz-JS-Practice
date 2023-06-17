

function reverseStr(str) {
    let rev = "";

     for(let i = 0; i < str.length; i++) {
        rev += str[(str.length - 1) - i];
     }
     console.log(rev);
}


function reverseText(str) {
    let textArr = str.split("");

    textArr.reverse();

    let result = textArr.join('');

    console.log(result);
    
}

// reverseStr("Susovan Sahoo");
// reverseStr("Hello world");

reverseText("Hello world");
