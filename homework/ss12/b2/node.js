let a = [67, 89, 20, 38949, 56, 68, 94, 80, 7, 129];
let max = a[0];
sum = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
        pos = i
    }
    sum += a[i]
}
let mean = sum / a.length;
alert("Max is: " + max + " at number: " + (pos+1) + " And average is: " + mean);