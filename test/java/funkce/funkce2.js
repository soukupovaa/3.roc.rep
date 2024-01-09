function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32
    return fahrenheit
}

let celsiusTemp = 25
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp)
console.log(fahrenheitTemp)

function fahrenheitToCelsius(fahrenheit) {
    let celsius = fahrenheit / 1.8 - 32
    return celsius
}

let fahrenheitTemp2 = 25
let celsiusTemp2 = fahrenheitToCelsius(fahrenheitTemp)
console.log(fahrenheitTemp)

let tlacitko = document.querySelector("#tlacitko")
let input = document.querySelector("#input")
let input2 = document.querySelector("#input")

function neconeco() {
    if (input === "C") {
        let input2 = celsiusToFahrenheit(celsius)
    } else if (input === "F") {
        let input2 = fahrenheitToCelsius(fahrenheit)
    }
}
