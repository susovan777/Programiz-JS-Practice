

let person = {
    name: "Susovan",
    age: 25,
    hobbies: ["coding", "gaming", "reading"],
    score: {
        math: 98,
        science: 92
    }
};

for(let key in person) {
    let value;

    value = person[key];

    console.log(`${key} - ${value}`);  
}