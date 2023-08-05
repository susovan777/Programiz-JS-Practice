// A year is a leap year if the following conditions are satisfied:
    // 1. The year is a multiple of 400.
    // 2. The year is a multiple of 4 and not a multiple of 100.

    function isLeapYear(year) {
        if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            console.log(`${year} is Leap year`);
        } else console.log(`${year} is not a Leap year`);
    }

    isLeapYear(2002);
    isLeapYear(2400);
    isLeapYear(2024);