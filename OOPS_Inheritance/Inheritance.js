class Parent {
    constructor(name, division) {
        this.name = name;
        this.division = division;
    }


}
class Child extends Parent {

}
let P = new Parent("Antony");
console.log(P.name);