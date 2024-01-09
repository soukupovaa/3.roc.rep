function convert() {
    let unit = document.getElementById("unit").value
    let teplota = parseFloat(document.getElementById("Teplota").value)

    if (unit === "F") {
        let vysledek = celsiusToFahrenheit(teplota)
        document.getElementById("vysledek").innerText =
            teplota + "°C is " + vysledek + "°F"
    } else if (unit === "C") {
        let vysledek = fahrenheitToCelsius(teplota)
        document.getElementById("vysledek").innerText =
            teplota + "°F is " + vysledek + "°C"
    } else {
        document.getElementById("vysledek").innerText =
            "Napiš celsium/fahrenheity"
    }
}

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32
    return fahrenheit
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = ((fahrenheit - 32) * 5) / 9
    return celsius
}
