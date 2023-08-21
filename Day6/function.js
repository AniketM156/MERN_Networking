function sub(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 - num2;
}
function add(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
}
console.log("add is : " + add(2, 3));
console.log("sub is : " + sub(4, 1));
