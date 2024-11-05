let f = 0;
let f1 = 1;
let f2 = 1;
let sum = 0
let limit = +prompt("Enter amount of values of Fibonacci Sequence")
for (let i = 0; i < limit - 2; i++) {
    if (i === 0) {
        document.write(f + "<br/>" + f1 + "<br/>" + f2 + "<br/>")
        sum += f + f1 + f2
    } else {
        f = f1 + f2;
        f1 = f2;
        f2 = f;
        document.write(f +"<br/>")
        sum += f
    }

}