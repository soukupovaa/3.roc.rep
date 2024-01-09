let tlacitko = document.querySelector("#tlacitko")
let nadpis = document.getElementById("nadpis")
let input = document.querySelector("#input")
let pocetKlik = 0 
tlacitko.addEventListener("click", zmenNadpis)

function zmenNadpis() {
     
    nadpis.style.fontSize = 100
    nadpis.innerText = "změna"
    let textInputu = input.value
    nadpis.innerText = textInputu
    pocetKlik = pocetKlik + 1

    if(textInputu === "otázka") {
        nadpis.innerText = "42"
    }

    if(pocetKlik%2 === 0  ) {
        nadpis.style.color = "red"
    }
    
    else if (pocetKlik%2=== 1) {
        nadpis.style.color = "black"
    }

}



