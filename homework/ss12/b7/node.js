let numbers = []
for(i = 0; i <11; i++){
    let a = +prompt(`Enter ${i+1} number:`)
    numbers.push(a)
}
console.log(numbers)
let guess = +prompt(`Enter guess:`);
for(j = 0; j < numbers.length; j++){
    if (guess === numbers[j]){
        numbers.splice(j,1);
        numbers[j] = numbers[j + 1];
    }
}
console.log(numbers);
