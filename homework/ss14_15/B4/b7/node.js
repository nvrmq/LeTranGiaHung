function reverse(a, b){
    let sequence = [a, b];
    return sequence.reverse();
}
let num1 = +prompt("Enter first number:")
let num2 = +prompt("Enter second number:")
alert(reverse(num1, num2));