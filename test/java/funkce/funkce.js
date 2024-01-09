function ukazka(pozdrav) {
    console.log("ahojkyy")
    console.log(pozdrav)
    console.log("čauky mňauky")
}

ukazka("dobrý den přeji")
 
function scitani(cisloA, cisloB) {
    let vysledek = cisloA + cisloB
    console.log(vysledek)
}

scitani(3, 8)

function prevod(km) {
    let mile = km * 0.613
    return mile
}

let vysledekPrevodu30 = prevod(30)
let vysledekPrevodu50 = prevod(50)

let textHTML = document.querySelector("#text")
textHTML.innerText = prevod(50)

function prevod2(km) {
    let mile = km * 0.613
    return mile
}
