let value = +prompt("Enter a positive number");
let digit = 1
while (isNaN(value) || value <= 0) {
    value = +prompt("Try again");
}
for (let i = 1; i <=value; i++) {
    digit *= i;
}
alert(`${value} factorial is equal to ${digit}`);