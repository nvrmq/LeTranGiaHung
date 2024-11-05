function vali() {
    let a = parseInt(document.getElementById("digit").value);
    if (a > 0) {
        alert("Greater than 0");
    } else if(a == 0) {
        alert("Equal to 0");
    } else if(a < 0) {
        alert("Smaller than 0");
    }
}