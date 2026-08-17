class BasePage {
    protected baseURL: string;
    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }
    protected navigate(path: string): void {
        console.log("Navigate to" + this.baseURL + path);


    }

}

class LoginPage extends BasePage {
    // constructor() {
    //     super("https://www.amazon.in");
    // }
    login(user: string): void {
        this.navigate("/login");
        console.log("Typing" + user + "into #username");

    }
}

let lp = new LoginPage("https://www.flipkart.com");
lp.login("Admin");