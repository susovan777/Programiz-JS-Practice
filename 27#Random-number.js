// Program to guess a random number

function guessRandom(low, high) {
    let temp = Math.random();
    let randNum = Math.floor(temp * (high - low)) + low;
    console.log(randNum);
}

guessRandom(5, 11);
// guessRandom(20, 30);