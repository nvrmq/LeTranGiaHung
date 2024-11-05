let number = [-32, 89, 56, 8, 25, 45, 7, 80, 2, 7];
let whole = []
for (i = 1; i <= number.length; i++) {
    if (number[i] > 10) {
        whole.push(number[i]);
    }
}
alert("Các số lớn hơn 10 là: " + whole);