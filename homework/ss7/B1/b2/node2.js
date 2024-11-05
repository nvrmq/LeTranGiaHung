function cal() {
    let cel = parseInt(document.getElementById("cel").value);
    let fah = (cel/5) * 9 + 32;
    alert("Độ F là: " + fah);
}