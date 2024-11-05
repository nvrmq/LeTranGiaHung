let a =""
while (a < 20 || a >100) {
    let a = +prompt("Enter temperature");
    if (a < 20) {
        alert("Not high enough");
    } else if (a > 100) {
        alert("Not low enough");
    } else if (isNaN(a)) {
        alert("Kidding me :v");
    } else  {
        alert("U gud bro");
        break;
    }

}