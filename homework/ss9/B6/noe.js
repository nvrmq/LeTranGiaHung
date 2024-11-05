function calculate() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let root = (-b)/a;
    document.getElementById("root").innerHTML = root;
}