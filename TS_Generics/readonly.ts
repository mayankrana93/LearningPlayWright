class PlaywrightConfig {
    protected readonly baseUrl: string;
    readonly timeOut: number;
    readonly retries: number;

    constructor(baseURL: string, timeout: number, retries: number) {
        this.baseUrl = baseURL;
        this.timeOut = timeout;
        this.retries = retries;
    }
    showConfig(): void {
        console.log("URL" + this.baseUrl);
        console.log("Timeout" + this.baseUrl);
        console.log("Max Retries" + this.retries);
    }


}
let pw = new PlaywrightConfig("https://www.google.com", 5000, 5);
pw.showConfig();