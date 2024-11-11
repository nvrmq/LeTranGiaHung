let x = +prompt("Enter x:");
let y =  +prompt("Enter y:");
let z = +prompt("Enter z:");
function checkTriangle(x, y, z) {
    if (x + y <= z || x + z <= y || z + y <= x || x <=0 || y<=0 && z<=0) {
        return ("Not a triangle")
    } else if ((x**2 + y**2 === z**2) || (z**2 + y**2 === x**2) || (x**2 + z**2 === y**2)) {
        return ("A right triangle");
    } else {
        return ("Is a triangle")
    }
}
console.log(x + y);
alert(checkTriangle(x, y, z));