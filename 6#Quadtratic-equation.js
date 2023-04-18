// Solve the equation and get the value of given equation
// let the equation is ax^2 + bx + c = 0

function quadSeed(a, b, c) {
    let D = b * b - 4 * a * c;
    let root1, root2;
    if (D > 0) {
        root1 = (-b + Math.sqrt(D)) / 2 * a;
        root2 = (-b - Math.sqrt(D)) / 2 * a;
        console.log(`${root1} and ${root2}`);

    } else if (D < 0) {
        let realPart = -b / 2 * a;
        let imgPart = (Math.sqrt(-D) / 2 * a).toFixed(2);
        console.log(`${realPart} + ${imgPart}i and ${realPart} - ${imgPart}i`);
    } else {
        root1 = -b / 2 * a;
        root2 = root1;
        console.log(`${root1} and ${root2}`);
        
    }
}

quadSeed(1, 6, 5);
quadSeed(1, -6, 9);
quadSeed(1, -3, 10);