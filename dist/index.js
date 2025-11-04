"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = [1, "Mosh"];
user.push(1);
const mySize = 3;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 2;
}
calculateTax(1000, 2022);
function calculateTax2(income, taxYear) {
    if ((taxYear || 2020) < 2022)
        return income * 1.2;
    return income * 2;
}
calculateTax2(1000);
function calculateTax3(income, taxYear = 2020) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 2;
}
calculateTax3(1000);
//# sourceMappingURL=index.js.map