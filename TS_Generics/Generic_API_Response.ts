function WebResponse<T>(statuscode: number, data: T): { statusCode: number, data: T } {
    return { statusCode: statuscode, data: data }
}

let userResponse = WebResponse<string>(200, "admin");
let flagResponse = WebResponse<boolean>(201, true);
let countResponse = WebResponse<number>(201, 200);


console.log(userResponse);