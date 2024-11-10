let numbers = []
for(i = 0; i < 10; i++){
    let a = +prompt(`Enter ${i+1} number into array1:`)
    numbers.push(a)
}
let numbers2 = []
for(i = 0; i < 10; i++){
    let a = +prompt(`Enter ${i+1} number into array2:`)
    numbers2.push(a)
}
let C= numbers.concat(numbers2)
alert(C);