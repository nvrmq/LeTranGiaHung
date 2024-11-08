function isPrime(number) {
    if (number <= 1 || number % 2 === 0) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    for (i = 3; i * i <= number; i++) {
        return number % i !== 0;
    }
    return true;
}
for (k = 0; k < 10000; k++) {
    if (isPrime(k)) {
        console.log(k);
    }
}
//cứu, nó cứ ra số ko nguyên :((((
