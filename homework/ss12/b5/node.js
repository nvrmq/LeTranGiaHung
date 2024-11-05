let amount = +prompt("Numbers of value: ");
let isNegativ = 0;
let values = [];
for (let i = 0; i < amount; i++) {
    let a = +prompt("Enter a value: ");
    values.push(a);
    if (a < 0) {
        isNegativ++;
    }
}
alert("Negative numbers are: " + isNegativ);