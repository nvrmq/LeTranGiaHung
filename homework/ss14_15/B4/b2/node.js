function area(a) {
    return (a**2) * 3.14
}
function circumfrence(b) {
    return 2 * b * 3.14;
}
let radius = +prompt("Enter radius:");
alert("Area is: " + area(radius));
alert("Circumfrence is: " + circumfrence(radius));