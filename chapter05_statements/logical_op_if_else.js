let username = "admin";
let isuserlocked = false;
let password = "securepassword";
if ((username === "admin" && password === "securepassword") && (!isuserlocked)) {
    console.log("User is allowed to enter to the DB")
}
else {
    console.log("User is prohibited");
}

let response;
console.log(response)