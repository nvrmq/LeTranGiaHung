function display() {
    let chem = parseInt(document.getElementById("chem").value);
    let math = parseInt(document.getElementById("math").value);
    let phy = parseInt(document.getElementById("phy").value);
    let sum = chem + phy + math;
    let mean = sum/3
    alert("Tổng điểm là: " + sum + " Điểm trung bình là: " + mean);
}