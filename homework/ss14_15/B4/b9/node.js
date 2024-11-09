let numbers = [""];
let times = 0
function check(a, b) {
    for (let i = 0; i < a; i++) {
        let number = +prompt("Enter " + (i + 1)  + " number:");
        numbers.push(number);
    }
    for (let i = 0; i < a; i++) {
        if (b === numbers[i]) {
            times += 1;
        }
    }
    if (times === 0) {
        times -= 1;
    }
}
let length = +prompt("Enter length:");
let guess = +prompt("Enter guess:");
check(length, guess);
alert("Time of appearance: " + times);