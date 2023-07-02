// Check wheather any keys available in ibjects 

let person = {
    name: "Susovan",
    age: 25,
    profession: "Programmer",
    hobbies: ['reading', 'gaming', 'coding'], // used array inside objects
    scores: {
        Math: 92,
        Science: 98
    } // used object insude object
};

// Methode#1:  'key' in object_name
// let hasKeys = 'age' in person;
// let hasKeys2 = 'greet' in person;

// Methode#2: hasOwnProperty()
let hasKeys2 = person.hasOwnProperty('greet');
let hasKeys = person.hasOwnProperty('hobbies');


console.log(hasKeys2);
console.log(hasKeys);
