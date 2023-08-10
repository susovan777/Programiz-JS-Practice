// splice() metode is used to remove element from an array

function removeItem(arr, num) {
    arr.splice(num, 2);
    return arr;
}

console.log(removeItem([8, 6, 4, 9, 0], 2));
