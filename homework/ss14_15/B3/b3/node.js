function check(a,b) {
    if (a > b) {
        alert(a +" > " + b);
    } else {
        alert("Sum is: " + (a + b));
    }
}
function input() {
    let num1 = +prompt("Enter first number");
    let num2 = +prompt("Enter second number");
    check(num1, num2)
}