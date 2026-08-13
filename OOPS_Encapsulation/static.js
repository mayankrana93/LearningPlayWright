class TestRunner {
    static totalTests = 0;
    static totalPass = 0;

    constructor(testName, testResult) {
        TestRunner.totalTests++;
        this.testName = testName;
        if (testResult) {
            TestRunner.totalPass++;
        }

    }
    static returnResult() {
        return "Total Tests: " + TestRunner.totalTests + "Tests Passed: " + TestRunner.totalPass;
    }
}

let testCheck = new TestRunner("Login", true);
let testCheck1 = new TestRunner("Signup", false);
console.log(TestRunner.returnResult());