function asses() {
    let hs1 = parseInt(document.getElementById("hs1").value);
    let hs1_1 = parseInt(document.getElementById("hs1_1").value);
    let hs1_2 = parseInt(document.getElementById("hs1_2").value);
    let hs2 = parseInt(document.getElementById("hs2").value);
    let hs3 = parseInt(document.getElementById("hs3").value);
    let res = ((hs1 + hs1_1 + hs1_2) + hs2 * 2 + hs3 * 3) / 8
    if (res >= 9) {
        document.getElementById("kind").innerText = "Học sinh Xuất sắc";
    } else if (res >= 8) {
        document.getElementById("kind").innerText = "Học sinh Giỏi";
    } else if (res >= 7) {
        document.getElementById("kind").innerText = "Học sinh Khá";
    } else if (res >= 5) {
        document.getElementById("kind").innerText = "Học sinh Trung Bình";
    } else {
        document.getElementById("kind").innerText = "Học sinh Yếu"
    }
    document.getElementById("mean").innerText = res;
}