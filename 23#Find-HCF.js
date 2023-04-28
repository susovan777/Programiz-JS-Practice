// Find Highest Common Factor of two number

function hcf(n1, n2) {
    let lowest;
    if(n1 < n2) lowest = n1;
    else lowest = n2;

    let result;
    for(let i = 2; i <= lowest; i++) {
        if(n1 % i == 0 && n2 % i == 0) result = i;
    }
    console.log(result);
}

hcf(12, 24);
hcf(18, 30);
hcf(20, 30);
