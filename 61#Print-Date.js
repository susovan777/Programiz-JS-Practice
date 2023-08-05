
let date = new Date();
console.log(date);

// let onlyDate = date.toDateString(); // format: day_name month day year 
// let onlyTime = date.toTimeString(); // format: hh:mm:ss GMT (IST)
let onlyDate = date.toLocaleDateString(); // format: day/mon/year
let onlyTime = date.toLocaleTimeString(); // format: hh:mm:ss am/pm

console.log(onlyDate);
console.log(onlyTime);

// if we want to print date as any format

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

console.log(`Current date is ${day}-${month}-${year}`);

