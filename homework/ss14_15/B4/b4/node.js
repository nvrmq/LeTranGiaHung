function isNumber(a) {
    if (!isNaN(a)) {
        return true;
    } else {
        return false;
    }
}
let value1 = +prompt("Enter a number");
alert(isNumber(value1))