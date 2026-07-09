let a = 10;
b = a;
b = 99;
console.log(a);

let obj1 = { val: 10 };
const obj2 = obj1;
obj2.val = 200;//objects point at same reference, if any value is changed then it will be pick the new value only
console.log(obj1.val);


