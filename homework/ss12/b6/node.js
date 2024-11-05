let amount = +prompt("Amount of values: ");
let values = [];
let state = false;
for (let i = 0; i < amount; i++) {
    let value = prompt("Enter a value");
    values.push(value);
}
let V = +prompt("Guess a V value");
for (let i = 0; i < amount; i++) {
    if (V == values[i]) {
        let state = true;
    }
}
if (state == true) {
    alert("V is in the array");
} else {
    alert("V is not in the array")
}


