let numbers = [];
let sumDivisibleby3 = 0
let divi= 0
let amount = +prompt("Enter amount of number:");
while (amount > 50){
    alert("Too long");
    amount = +prompt("Enter amount of number again:");
}
for(i = 0; i < amount; i++){
    let a = +prompt(`Enter ${i+1} number:`)
    numbers.push(a)
}
for (k = 0; k < numbers.length; k++){
    if (numbers[k] % 3 === 0) {
        divi += numbers[k];
        sumDivisibleby3 += 1
    }
}
alert(divi / sumDivisibleby3);
