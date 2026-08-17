class APIClient {
    public baseURL: string;
    private apiKey: string;
    protected timeOut: number;

    constructor(baseUrl: string, apiKey: string, timeOut: number) {
        this.baseURL = baseUrl;
        this.apiKey = apiKey;
        this.timeOut = timeOut;
    }

    public getAuthHeader(): string {
        return "Bearer" + this.apiKey;
    }
    public sendRequest(path: string): void {
        console.log("GET" + this.baseURL + path);
        console.log("AUTH" + this.apiKey + path);
        console.log("Timeout" + this.timeOut + path);
    }

}
class UserAPIClient extends APIClient {
    example: string;
    constructor(example: string) {
        super("", "", 2);
        this.example = example;
    }


    getUsers(): void {
        console.log("Fetching users" + this.timeOut) + "ms";
        console.log("URL:" + this.baseURL + "/users")
        console.log("URL:" + this.timeOut + "/users")
        console.log("URL:" + this.getAuthHeader + "/users")

    }
}
let up = new UserAPIClient("example");
