let year = 2025;

if ((year % 4 === 0 && year % 4 !== 100) || (year % 400 === 0)) {
    console.log("Year is leap year");
}
else {
    console.log("Year is not leap year")
}
let a = 10;

console.log(a++ + a)