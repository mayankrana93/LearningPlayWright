class Car {
    testVar = 2002;
    constructor(carName) {
        this.mama = carName;//this.mama is creating new variable automatically
    }

    driveCar() {
        console.log("I am driving" + this.mama);
    }


}

let hyundai_car = new Car("Creta");
hyundai_car.driveCar();
console.log(hyundai_car.testVar);