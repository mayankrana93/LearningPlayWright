// console.log(a);// ref error a is not defined
// let a = "check";//same - ref error a is not defined



let user = "Mnk";

if (true) {
    console.log(user);//if let is not declared inside block, it will take global value
    let user = "Rana";//here declared again, so will throw reference error
}
