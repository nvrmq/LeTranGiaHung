do {
    var fraction = prompt("Enter a fraction contains /:");
    var arr = fraction.split("/");
    function check(x) {
        if (x[0] == 0) {
            alert("Fraction is equal to zero, try again:");
            return false
        } else {
            return !(x.length !== 2 || isNaN(x[0]) || isNaN(x[1]) || x[1] == 0);
        }
    }
} while (check(arr)===false);
console.log(arr);
let a = parseFloat(arr[0]);
let b = parseFloat(arr[1]);
let divi;
let min = a;
if (min > b) {
        min = b;
}
for (let i = 1; i <=min; i++) {
    if (a % i === 0 && b % i === 0) {
        divi = i;
    }
}
a /= divi;
b /= divi;
alert(`${a}/${b}`)
