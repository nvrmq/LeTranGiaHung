class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    area (){
        return this.width * this.length;
    }
    perimeter () {
        return 2*(this.width + this.length);
    }
    draw(canvasId) {
        const canvas = document.getElementById(canvasId);
        const context = canvas.getContext("2d");
        context.fillRect(0, 0, this.length, this.width);
    }
}
function calculate () {
    let length = parseInt(document.getElementById("length").value);
    let width = parseInt(document.getElementById("width").value);
    let method = document.getElementById("method").value;
    let rectangle = new Rectangle(width, length);
    let result = ""
    if (method === "area") {
        result = "Area is:" + rectangle.area()
    } else {
        result = "Perimeter is:" + rectangle.perimeter()
    }
    document.getElementById("result").innerHTML = result;
    rectangle.draw("canvas")
}