
// We can use splice() method to insert a item in an array

function insertItem(arr, num, value) {
    arr.splice(num, 0, value);
    return arr;
}

console.log(insertItem([21, 31, 'He', 'She', true, false, 'Boy'], 8, 'Girl'));
console.log(insertItem([21, 31, 'He', 'She', true, false, 'Boy'], 5, 49));
