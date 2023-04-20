// convert KM to Miles

function kmToMiles(km){
    return km * 0.621371;
}

kmToMiles(10);
console.log(kmToMiles(10));


// Convert Celcius to Ferenhite

function cToF(c) {
    let F = c * 1.8 + 32;
    console.log(F);
}

cToF(55);


// Print random number

function randomN() {
    let random = Math.random() * 5 + 1;
    console.log(Math.floor(random));
}

randomN();
