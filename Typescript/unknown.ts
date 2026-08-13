let unknown: unknown = "Hello";

if (typeof unknown === "string") {
    console.log("Hi");
}

let message: string;
let userId: number;

function greet(name: string): string {

    return `Hello, ${name}`


}

console.log(greet("Mayank"));

//object annotations

let user: { name: string, age: number } = {
    name: "Uncle", age: 20
};

console.log(user.name);



