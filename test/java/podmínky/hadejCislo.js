let tlacitko = document.querySelector("#tlacitko")
let nadpis = document.getElementById("nadpis")
let input = document.querySelector("#input")
let tajneCislo = Math.floor(Math.random*100)
let pocetPokusu = 0;
tlacitko.addEventListener("click", zmenNadpis)

function zmenNadpis() {
     
    if ( input > tajneCislo ) {
        nadpis.innerText = "číslo je menší"
    }

    else if ( input < tajneCislo) {
         nadpis.innerText = "číslo je větší"
    }
   

    else if ( input === tajneCislo) {
        nadpis.innerText = "uhodl jsi číslo"
    }
    
}


input = prompt("Zadej číslo")
