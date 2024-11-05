function calculate() {
    let a = +prompt("Enter the first number");
    let b = +prompt("Enter the second number");
    if (a % b == 0) {
        alert(a + " is divisible by " + b);
    } else {
        alert(a + " is not divisible by " + b);
    }
}