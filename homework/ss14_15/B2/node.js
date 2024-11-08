let foot = +prompt("Enter foot(feets)?");
let meter= +prompt("Enter meter(s)?");
function footMeter(a) {
    return 0.305 * a;
}
function meterFoot(b) {
    return 3.279 * b;
}
document.write(foot + " foot(feets) is " + footMeter(foot) + " meter(s)" + "<br/>");
document.write(meter + " meter(s) is " + meterFoot(meter) + " foot(feets)");