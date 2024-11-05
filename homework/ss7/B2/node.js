function cal() {
    let amount = parseInt(document.getElementById("amount").value)
    let currency1 = document.getElementById("currency1").value
    let currency2 = document.getElementById("currency2").value
    if (currency1 === "Dong" && currency2 === "USD") {
        let result1 = amount * 0.000040
        alert(result1);
    } else if (currency1 ==="USD" && currency2 ==="Dong") {
        let result2 = amount / 0.000040
        alert(result2);
    } else {
        alert("something went wrong")
    }
}
