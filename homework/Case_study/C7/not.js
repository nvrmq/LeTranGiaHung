let values = [];
let amount = +prompt("Enter amount of numbers:")
for (let i = 1; i <= amount; i++) {
    values.push(+prompt("Enter amount of number:"));
}
alert(letterOrNumber(values))
function letterOrNumber(arr) {
    let definer = typeof values[0];
    if (definer === "number") {
        for (i = 1; i < arr.length; i++) {
            if (arr[i] === definer) {
                return 1;
            } else {
                return -1;
                break;
            }
        }
    } else if (definer === "string") {
        for (i = 1; i < arr.length; i++) {
            if (arr[i] === definer) {
                return 0;
            } else {
                return -1;
                break;
            }
        }
    }
}
alert(letterOrNumber(values));