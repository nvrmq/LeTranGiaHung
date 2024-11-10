class Temperature {
    constructor(celsius) {
        if (celsius < -273) {
            console.error('Celsius not supported.');
        } else {
            this.celsius = celsius;
        }
    }
    toFahrenheit() {
        return (this.celsius * 9/5) +32;
    }
    toKelvin() {
        return this.celsius + 273.15;
    }
}
function calculate() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const type = document.getElementById("type").value;
    let temperature = new Temperature(celsius);
    let result;
    if (type === "fahrenheit") {
        result = temperature.toFahrenheit() + " Fahrenheit";
    } else {
        result = temperature.toKelvin() + " Kelvin";
    }
    document.getElementById("result").innerHTML = result;
}