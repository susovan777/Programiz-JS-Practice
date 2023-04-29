// Calculate the Lowest Common Multiple of two number
// formula, LCM = n1 * n2 / hcf


/*
function lcm(n1, n2) {
    let lcm;
    let result = (n1 > n2) ? n1 : n2;

    while(true) {
        if(result % n1 == 0 && result % n2 == 0) {
            lcm = result;
            break;
        }
        result++;
    }
    console.log(lcm);
}
*/
// ----------------------------------------------------------------------------------------------------------------------------------------------


function lcm(n1, n2) {
    let mul = n1 * n2;
    let factor = 1;
    let result;
    for(let i = 2; i < mul; i++) {
        if(n1 % i == 0 && n2 % i == 0) {
            factor *= i;
            n1 = n1 / i;
            n2 = n2 / i;
        }
    }
    result = factor * n1 * n2;
    console.log(result);
}


lcm(2, 3);
lcm(18, 24);
lcm(6, 15);
lcm(25, 15);
lcm(120, 150);