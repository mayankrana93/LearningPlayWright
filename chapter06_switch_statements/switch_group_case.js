let browser = "Edge";

switch (browser) {
    case "Edge":
    case "Chrome":
    case "Brave":
    case "Opera":
        console.log("Based on Chromium")
        break;
    case "Firefox":
        console.log("Mozilla Project");
        break;
    case "Safari":
        console.log("Nitro");
        break;
    default:
        console.log("Unknown browser - manual testing needed");
}