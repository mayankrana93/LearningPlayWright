class Credentials {
    #apiKey;
    constructor(user, key) {
        this.user = user;
        this.#apiKey = key;
    }

    getAuthHeader() {
        return "Bearer" + this.#apiKey;
    }

}

let cred = new Credentials("Mayank", "@#svbdf437");
console.log(cred.user);
//console.log(cred.#apiKey);//will throw error

let value = cred.getAuthHeader();
console.log(value);
