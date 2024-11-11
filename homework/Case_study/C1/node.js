let numbers = [];
do {
    var amount = +prompt("Enter amount of numbers:");
} while (amount <= 2 || amount >= 20 || amount % 1 !==0);
if (amount <= 20) {
    for (let i = 0; i < amount; i++) {
        let number = +prompt("Enter " + (i + 1) + " number:");
        numbers.push(number);
    }
} else {
    alert("Too much, smaller or equal to 20 pls");
}
console.log(`Before assesing: ${numbers}`);
let increasing = true;
let distanceUp = numbers[1] - numbers[0];
if (distanceUp >= 0) {
    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] - numbers[i-1] !== distanceUp) {
            increasing = false;
            break;
        }
    }
    if (increasing) {
        console.log(`OK`);
    } else {
        console.log("NO");
    }
} else {
    alert("No repeated number");
}
