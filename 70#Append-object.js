
function appendArray(arr, obj) {
    arr.push(obj);
    return arr;
}

let array = [23, 66, 89];
let object = {name: "Raj", age: 23};

console.log(appendArray(array, object));