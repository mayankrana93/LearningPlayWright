var a = 100; //global scope
console.log(a);

//Definition of the function
function printvarHello() {
    var a = 25;
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log("F", a);
}
printvarHello();
//var also allows re-declaration
var a = 125;
var a = 225;
console.log(a);

let b = 27;//global scope
console.log(b);

//let b=90;//redeclaration not allowed
b = 88899999999; //re-initialization allowed
console.log(b);

function printletHello() {
    let b = 70;//local scope
    console.log(b);
    if (true) {
        let b = 333;
        console.log(b);

    }
    //   b = 900;
    console.log(b);
}
printletHello();

const pi = 3.14;
pi = 33;
console.log(pi);
