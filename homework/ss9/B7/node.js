function solve() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    let d = Math.sqrt(b**2 - (4 * a * c));
    if (b**2 - (4 * a * c) > 0) {
        let root1 = (-b + d)/(2 * a);
        let root2 = (-b - d)/(2 * a);
        document.getElementById("roots").innerHTML = root1 + " or " + root2;
    } else if (b**2 - (4 * a * c) === 0) {
        document.getElementById("roots").innerHTML = -b/ (2 * a);
    } else {
        document.getElementById("roots").innerHTML = "undefined"
    }
}