function area() {
    let radius = parseInt(document.getElementById("radius").value);
    let area = (radius**2) * 3.141592652;
    let diameter = (radius*2) * 3.141592652;
    alert("Diện tích hình tròn là: " + area + " Chu vi hình tròn là: " + diameter);
}