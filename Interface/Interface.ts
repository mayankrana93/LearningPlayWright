interface Calculator {
    add(a: number, b: number): number;
    sub(a: number, b: number): number;
    multiply(a: number, b: number): number;

}
const calc: Calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    multiply: (a, b) => a * b
};

console.log(calc.add(2, 3));