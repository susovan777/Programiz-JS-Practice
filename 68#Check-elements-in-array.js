// We can use 2 method 1. includes() and 2. indexOf()

function checkItem(arr, value) {
    let hasValue = arr.includes(value);
    return hasValue;
}

console.log(checkItem(['Raj', true, 34, 'H', 0, false], false));
console.log(checkItem(['Raj', true, 34, 'H', 0], 23));
