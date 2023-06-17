// There are many methods to create object:
    // 1. Using object literal
    // 2. By creating instance of Object directly
    // 3. By using constructor function
    
    // 1. Using object literal
    let person = {
        name: "Susovan",
        age: 25,
        profession: "Programmer",
        hobbies: ['reading', 'gaming', 'coding'], // used array inside objects
        greet: function() {
            console.log("Hello everyone, how are you?");
        }, // used function inside objects
        scores: {
            Math: 92,
            Science: 98
        } // used object insude object
    };


    // 2. By creating instance of Object directly
    const person1 = new Object({
        name: "Susovan",
        age: 25,
        profession: "Programmer",
        hobbies: ['reading', 'gaming', 'coding'], 
        greet: function() {
            console.log("Hello everyone, how are you?");
        },
        scores: {
            Math: 92,
            Science: 98
        }
    });


    // 3. By using constructor function
    function person2() {
        this.name = "Susovan",
        this.age = 25,
        this.profession = "Programmer",
        this.hobbies = ['reading', 'gaming', 'coding'], 
        this.greet = function() {
            console.log("Hello everyone, how are you?");
        },
        this.scores = {
            Math: 92,
            Science: 98
        }
    }


    // console.log(person1.name);
    // console.log(person1.hobbies[1]);
    // console.log(person1.scores.Science);
    // console.log(person1.greet());


    // 41# Program to remove element from Object

    delete person.greet;
    console.log(person);
    
    