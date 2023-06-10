
function alphabeticalOrder(str){
    let arr = str.split('');
    let sortArr = arr.sort();
    let newName = "";

    for (let i = 0; i < sortArr.length; i++) {
        newName += sortArr[i];
    }
    console.log(newName);
}

// alphabeticalOrder('dcba');
// alphabeticalOrder('susovan sahoo');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function alphabeticOrder(str) {
    let arr = str.split(' ');
    arr.sort();
    for(const element of arr) {
        console.log(element);
    }
    console.log( arr.join(' '));
}

alphabeticOrder("I am learning JavaScript");
alphabeticOrder("cat big dancing a");