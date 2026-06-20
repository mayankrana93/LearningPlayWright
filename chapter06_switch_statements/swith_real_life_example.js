let responsecode = 404;
switch (responsecode) {
    case 200:
        console.log("200 OK")
        break
    case "404"://"404 will go to default as switch uses strict comparison"
        console.log("Not found");
        break;
    default:
        console.log("No status code match")
}