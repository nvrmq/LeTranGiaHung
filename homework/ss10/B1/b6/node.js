let sum = 0;
for (let i = 0; i < 30; i++) {
    if (i % 7 === 0) {
        sum += i;
    }
}
alert("The sum is: " + sum);