let values = [+prompt("Nhập giá trị đầu tiên"),+prompt("Nhập giá trị thứ hai"),+prompt("Nhập giá trị thứ ba"),+prompt("Nhập giá trị thứ tư"),+prompt("Nhập giá trị thứ năm")];
let max = values[0];
for (let i = 0; i < values.length; i++) {
    if (values[i] > max) {
        max = values[i];
    }
}
alert("Giá trị lớn nhất là: " + max)