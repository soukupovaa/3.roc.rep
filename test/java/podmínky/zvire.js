let tlacitko = document.querySelector("#tlacitko")
let nadpis = document.getElementById("nadpis")
let input = document.querySelector("#input")
let nadpis1 = document.getElementById("nadpis1")
let body = document.querySelector("body")

tlacitko.addEventListener("click", zmenNadpis)

function zmenNadpis() {
     

    let textInputu = input.value
   

    if(textInputu === "želva") {
        nadpis.innerText = "mám ráda želvy 🐢🐢🐢"
        body.style.backgroundColor= "green"
    }

    else if(textInputu === "pes") {
        nadpis.innerText = "haf xd 🐶"
        body.style.backgroundColor =  "blue"
    }

    else if(textInputu === "kočka") {
        nadpis.innerText = "čiči 🐱❤"
        body.style.backgroundColor = "pink"

     }
 

}