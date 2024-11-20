let date = prompt("Enter month and year");
function monthLength(n) {
    var arr = n.split("/");
    let month = parseInt(arr[0]);
    let year = parseInt(arr[1]);
    if (arr.length != 2) {
        alert("Invalid date");
        n = prompt("Enter month and year")
    } else {
        if (month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12){
            return 31;
        } else if (month === 2) {
            if (year % 4 === 0 && year % 100 !== 0){
                return 29;
            } else if (year % 100 === 0 && year % 400 === 0){
                return 29;
            } else  {
                return 28;
            }
        } else {
            return 30;
        }
    }
}
alert(monthLength(date));