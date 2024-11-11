function isSymmetric(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        if (arr[i] !== arr[arr.length-i-1]) {
            return false;
        }
        return true;
    }
}
let arr = [];
let a = +prompt("Enter a amount of number:")
for (let i = 0; i < a; i++) {
    let number = +prompt("Enter " + (i + 1)  + " number:");
    arr.push(number);
}
if (isSymmetric(arr)) {
    alert(`OK`);
} else {
    alert(`NO`);
}