let tri1 = "";
let tri2 = "";
let tri3 = "";
let tri4 = "";
for (let i = 1; i <=5; i++) {
    for (let j = 1; j <=i; j++) {
        tri1 += "*";
    }
    tri1 += "<br/>";
}
document.getElementById("tri1").innerHTML = tri1;
for (let i = 5; i >=1; i--) {
    for (let j = 1; j <=i; j++) {
        tri2 += "*";
    }
    tri2 += "<br/>";
}
document.getElementById("tri2").innerHTML = tri2;
for (let i = 1; i <=5; i++) {
    for (let j = 1; j <=5 - i; j++) {
        tri3 += "o";
    }
    for (let k = 1; k <=i; k++) {
        tri3 += "*"
    }
    tri3 += "<br/>";
}
document.getElementById("tri3").innerHTML = tri3;
for (let i = 5; i >=1; i--) {
    for (let j = 1; j <=5 - i; j++) {
        tri4 += "o";
    }
    for (let k = 1; k <=i; k++) {
        tri4 += "*"
    }
    tri4 += "<br/>";
}
document.getElementById("tri4").innerHTML = tri4;