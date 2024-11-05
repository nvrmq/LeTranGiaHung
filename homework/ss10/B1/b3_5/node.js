let f = 0;
let f1 = 1;
let f2 = 1;
let sum = 0
for (let i = 0; i < 18; i++) {
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
alert("The sum of the first 20 Fibonacci numbers is: " + sum);