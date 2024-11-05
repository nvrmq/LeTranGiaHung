let amount = +prompt("Enter amount of values:");
let whole = []
for (let i = 0; i <= amount; i++) {
    let value = +prompt("Enter a whole number");
    whole.push(value);
}
alert("All whole value are: " + whole);
let resverse = whole.reverse();
alert("Reversed sequence is: " + resverse);
