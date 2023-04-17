// Calculate the area of triangle
    // Equilateral triangle; Isoceles triangle; Scalene triangle

function areaTriangle(a, b, c){
    let area = a + b + c;
    if(a == b && b == c && c == a) {
        console.log('It is an Equilateral triangle and the area is: ' + area);
    } else if((a == b && a != c) || (a == c && a != b)) {
        console.log('It is an Isoceles triangle and the area is: ' + area);
    } else console.log('It is an Scalene triangle and the area is: ' + area);
    // return a+b+c;
}

areaTriangle(8, 8, 5);
areaTriangle(5, 5, 5);
areaTriangle(5, 8, 10);