function cal() {
    let doanhSo = parseInt(document.getElementById("amount").value);
    let hoaHong;
    if (doanhSo < 10) {
        hoaHong = doanhSo * 0.05;
    } else if (doanhSo >= 10 && doanhSo < 50) {
        hoaHong = doanhSo * 0.10;
    } else if (doanhSo >= 50 && doanhSo < 100) {
        hoaHong = doanhSo * 0.15;
    } else if (doanhSo >= 100) {
        hoaHong = doanhSo * 0.20;
    }
    alert("Hoa hồng là: " + hoaHong);
}