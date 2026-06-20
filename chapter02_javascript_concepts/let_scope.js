let a = 10;

if (true) {
    console.log(a)//TDZ Temporal dead zone 
    let a = 20;
}