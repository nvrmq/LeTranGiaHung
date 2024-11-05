function check() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    if (a + b > c && a + c > b && b + c > a) {
        alert("That is a triangle");
    } else {
        alert("That is NOT a triangle");
    }
}