let count = 0;
function flakyAPI() {
    count++;
    if (count < 3) {
        return Promise.reject("Attempt" + count + ": failed");
    }
    return Promise.resolve("Attempt" + count + "success")
}

async function retryTesting(maxRetries) {

    for (let i = 1; i <= maxRetries; i++) {
        try {
            let result = await flakyAPI();
            console.log("Pass Promise, I will exit also," + result)
            break;
        }
        catch (error) {
            console.log("Catch Fail" + error);
        }
    }
}




retryTesting(5);