
let person = {
    name: "Susovan",
    age: 25,
    hobbies: ["coding", "gaming", "reading"],
    score: {
        math: 98,
        science: 92
    }
}

let samePerson = person;
console.log(samePerson);

// another method to clone a object is Object.assign()

let clonePerson = Object.assign({}, person);
clonePerson.name = "Sahoo";

// console.log(clonePerson);

// another method to clone using spread operator (...)

let copyPerson = {...person};
copyPerson.age = 30;

console.log(copyPerson);


// there is a another methode called, JSON.parse(JSON.stringify(object_name))