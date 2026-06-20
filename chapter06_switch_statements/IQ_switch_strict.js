let a = "5";
switch (a) {
    case 5:
        console.log("Loose equality comparison");
        break;
    case "5":
        console.log("Strict equality comparison")
        console.log(process.version)
        console.log(process.platform)
        break;
    default:
        console.log("Exit")

}