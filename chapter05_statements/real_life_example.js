let isLoggedin = true;
let userRole = "editor";

if (isLoggedin) {
    if (userRole === "admin") {
        console.log("admin can perform all actions")
    }
    else if (userRole === "editor") {
        console.log("User has edit role to objects")
    }
    else if (userRole === "readonly") {
        console.log("User has read only access to objects")
    }
    else {
        console.log("Corrupted user")
    }
}
else {
    console.log("User not logged in")
}