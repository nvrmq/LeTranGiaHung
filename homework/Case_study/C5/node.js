let numbers = prompt("Enter a number:");
function findMaxNumber(n) {
    if (numbers.length === 4 && !isNaN(numbers)) {
        let max = 0;
        for (let i = 0; i < n.length; i++) {
            let arr = n.slice(0, i) + n.slice(i + 1);
            let number = parseInt(arr);
            if (max < number) {
                max = number;
            }
        }
        alert(`Max is: ${max}`)
    } else {
        alert(-1);
    }
}
findMaxNumber(numbers);