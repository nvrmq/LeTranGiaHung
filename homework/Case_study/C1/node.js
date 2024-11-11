let numbers = [];
let amount = +prompt("Enter amount of numbers:");
if (amount > 2) {
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
    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] - numbers[i-1] != distanceUp) {
            increasing = false;
            break;
        }
    }
    if (increasing) {
        console.log(`The array is increasing at a rate of ${distanceUp}`);
    } else {
        console.log("The array is not increasing");
    }
} else {
    console.log("Can be determined");
}