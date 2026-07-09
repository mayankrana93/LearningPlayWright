function checkMax(max) {
    let count = 0;
    function getData(testName) {
        count++;
        if (count > max) {
            return `${testName} max retries exhausted ${count}/${max}`
        }
        return `${testName} retries ${count} of ${max} exhausted`
    }
    return getData;
}

let count = checkMax(3);
console.log(count("Login"));

let obj = { key: "value" };
console.log(obj.key);
console.log(obj["key"]);

