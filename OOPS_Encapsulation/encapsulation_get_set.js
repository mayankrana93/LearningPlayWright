class Person {
    #children1;
    #children2;

    constructor(parent, child1, child2) {
        this.parenting = parent;
        this.#children1 = child1;
        this.#children2 = child2;

    }

    getChild() {
        return this.#children1;
    }
    setChild(updatedName) {
        this.#children1 = updatedName;
    }

}
let per = new Person("Billu", "Noami", "Oliver");
console.log(per.parenting);
per.setChild("Andrew");
console.log(per.getChild());

