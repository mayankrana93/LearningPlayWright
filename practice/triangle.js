let side1 = 10;
let side2 = 0;
let side3 = 10;

if (side1 <= 0 || side2 <= 0 || side3 <= 0 || (side1 + side2 <= side3) || (side2 + side3 <= side1) || (side3 + side1 <= side2)) {
    console.log("Not valid Triangle")
}

if (side1 === side2 && side2 === side3) {
    console.log("Triangle is equilateral");

}
else if (side1 === side2 || side2 === side3 || side3 === side1) {
    console.log("Triangle is isosceles")
}
else {
    console.log("Triangle is scalene")
}

