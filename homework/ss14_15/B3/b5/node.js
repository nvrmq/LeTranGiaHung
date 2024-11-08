let stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let starsSystem = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major"];
let result = ""
function check(choice) {
    if (stars.includes(choice)) {
        for (let i = 0; i < stars.length; i++) {
            if (stars[i] === choice) {
                result += starsSystem[i];
                alert(stars[i] + " is in: " +starsSystem[i]);
                break;
            }
        }
    } else {
        alert("No stars found");
    }
}
let pick = prompt("Choose a star:");
check(pick);
