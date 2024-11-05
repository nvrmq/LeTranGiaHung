function mean() {
    let a = parseInt(document.getElementById("math").value)
    let b = parseInt(document.getElementById("chem").value)
    let c = parseInt(document.getElementById("phy").value)
    let d = a + b + c;
    let aver = d/3
    alert(aver)
}