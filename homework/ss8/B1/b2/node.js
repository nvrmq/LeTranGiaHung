function reg() {
    let a = parseInt(document.getElementById("age").value);
    if (a >= 15 && a <= 17) {
        alert("Valid for 10th Grade Education");
    } else {
        alert("Invalid for 10th Grade Education");
    }
}