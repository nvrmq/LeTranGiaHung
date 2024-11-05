function check() {
    let a = +document.getElementById("age").value;
    if (a % 1 === 0 && a < 120 && a > 0) {
        alert("Valid");
    } else {
        alert("Invalid");
    }
}