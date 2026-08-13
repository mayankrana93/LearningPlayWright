class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + "is eating");
    }
    sleep() {
        console.log(this.name + "is sleeping");
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(this.name + "named dog having breed: " + this.breed + "is barking")
    }
}
let D = new Dog("Tomy", "Pug");
//D.eat();
D.sleep();
D.bark();