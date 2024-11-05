let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
let c = +prompt("Enter last number");
if (a > b) {
    if (a > c) {
        alert(a + " is the largest number");
    } else  {
        alert(c + " is the largest number");
    }
} else {
    if (b > c) {
        alert(b + " is the largest number");
    } else {
        alert(c + " is the largest number");
    }
}