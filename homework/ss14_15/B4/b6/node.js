function isPosint(a){
    if (a > 0){
        if (a % 1 == 0) {
            return true;
        }
    } else {
        return false;
    }
}
let num1 = +prompt("Enter a number");
alert(isPosint(num1));