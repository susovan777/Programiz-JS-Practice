// Program to generate random string of given length

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYSabcdefghijklmnopqrstuvwxyz0123456";

function randomString(length) {
    let result = "";
    let charLength = characters.length;

    for(let i = 0; i < length; i++) {
        let randNum = Math.floor(Math.random() * charLength)
        result += characters.charAt(randNum)
    }
    console.log(result);
}

randomString(5);
randomString(10);
