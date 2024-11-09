function factorial(a) {
    if (a < 0){
        return "Not defined";
    } else if (a === 0){
        return 1;
    } else {
        return a * factorial(a-1);
    }
}
let num1 = +prompt("Enter a number")
alert(factorial(num1))