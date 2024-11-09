let num1 = +prompt("Enter first number: ");
let num2 = +prompt("Enter second number: ");
let num3 = +prompt("Enter third number: ");
function isSmallest(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (c < b) {
        return c;
    } else {
        return b;
    }
}
alert("The smallest number is: " + isSmallest(num1, num2, num3));