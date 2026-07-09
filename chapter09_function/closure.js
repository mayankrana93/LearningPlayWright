function max_retryChecker(max) {
    let attempt = 0;
    function getValue(testName) {
        attempt++;

        if (attempt > max) {
            return `${testName} max retries exhausted`
        }
        return `Attempt ${attempt}/${max} for ${testName}`
    };

    return getValue;

}

let retry = max_retryChecker(3);
console.log(retry("Login1"));
console.log(retry("Login2"));
console.log(retry("Login3"));
console.log(retry("Login4"));
console.log(retry("Login5"));