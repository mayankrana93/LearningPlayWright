let responseCodes: number[] = [200, 201, 400, 302, 503];


function getFailedCodes(codes: number[]): number[] {
    return codes.filter(function (code: number): boolean {
        return code >= 400;
    });

}

console.log(getFailedCodes(responseCodes));

