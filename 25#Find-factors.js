// Find the factors of a number
    // the factor number should exactly divide the number (with 0 remainder). For example, The factor of 12 is 1, 2, 3, 4, 6, and 12.


function factors(n) {
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            console.log(i);
        }
    }
}

// factors(18);
// factors(27);
// factors(20);
// factors(12);
factors(33);