let digits = [];
let amount = +prompt("Enter amount of numbers:")
for (let i = 1; i <= amount; i++) {
    digits.push(+prompt("Enter amount of number:"));
}
function oddOrEven(arr) {
    let num = parseInt(arr[0]) % 2;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] % 2 != num) {
            return -1;
        }
    }
    if (num === 0){
        return 1;
    } else {
        return 0;
    }
}
alert(oddOrEven(digits));