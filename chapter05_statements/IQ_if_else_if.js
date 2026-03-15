//true
if ("hello") {
    console.log("String is truthy");
}
if (5454) {
    console.log("Number is truthy");
}
if ([]) {
    console.log("null array/object is truthy")
}
if ({}) {
    console.log("Empty object is truthy");
}


//false
if ("") {
    console.log("Null string is true ")
}
else {
    console.log("Null string is false ")
}

if (0) {
    console.log("0  is true ")
}
else {
    console.log("0 is false ")
}

if (undefined) {
    console.log("undefined is true");
}
else {
    console.log("undefined is false");
}

if (null) {
    console.log("null is true")
}
else {
    console.log("null is false")
}

if (NaN) {
    console.log("NaN is true")
}
else {
    console.log("NaN is false")
}