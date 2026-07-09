const obj1 = { a: 10, b: 20 };
const obj2 = { c: 30, d: 40 };


const copy = { ...obj1 };
console.log(copy);


const merge = { ...obj1, ...obj2 };
console.log(merge)

const user = {
    name: "Test",
    sayMyname(lastName) {
        this.name += lastName;
        return this.name
    }
};

console.log(user.sayMyname("Dutt"));