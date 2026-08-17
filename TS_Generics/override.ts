class BaseTest {
    setUp(): void {
        console.log("Setting Up");
    }
    tearDown(): void {
        console.log("Tear Down");
    }
}
class LoginTest extends BaseTest {
    pageName: string;
    constructor(pageName: string) {
        super();
        this.pageName = pageName;
    }
    override setUp(): void {
        console.log(this.pageName + " Logged in successfully");
    }
}

let lt = new LoginTest("Flipkart");
lt.setUp();