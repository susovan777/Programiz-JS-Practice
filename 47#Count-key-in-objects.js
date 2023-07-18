
let person = {
    name: "Susovan",
    age: 25,
    hobbies: ["coding", "gaming", "reading"],
    score: {
        math: 98,
        science: 92
    }
};

let count = 0;

for(let key in person) {
    count++;
}

// console.log(count);

// for printing all the keys & values

// console.log(Object.keys(person)); // for printing only keys
// console.log(Object.values(person));  // for printing values
console.log(Object.entries(person));  // for printing keys and values



