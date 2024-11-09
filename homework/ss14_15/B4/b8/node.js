let numbers = [""];
function reverse(a) {
    for (let i = 0; i < a; i++) {
        let number = +prompt("Enter " + (i + 1)  + " number:");
        numbers.push(number);
    }
}
let length = +prompt("Enter length:");
reverse(length);
alert(numbers.reverse());