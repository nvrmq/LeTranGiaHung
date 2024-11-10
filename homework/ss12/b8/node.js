let numbers = []
for(i = 0; i < 10; i++){
    let a = +prompt(`Enter ${i+1} number:`)
    numbers.push(a)
}
numbers.sort(function (a, b) {return b - a})
alert(numbers)