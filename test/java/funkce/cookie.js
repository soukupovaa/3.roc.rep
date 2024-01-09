let tlacitko = document.querySelector("#tlacitko")
let text1 = document.getElementById("nadpis")
let text2 = document.getElementById("text2")
let text3 = document.getElementById("text3")
let text4 = document.getElementById("text4")
let a = 1+Math.round(Math.random()*3)

tlacitko.addEventListener("click", zmenText)

text2.style.display="none"
text3.style.display="none"
text4.style.display="none"


    function zmenText() {
    var a;
    a = 1+Math.round(Math.random()*3); // číslo 4 značí počet odkazů
    if (a===1) {
        text2.style.display="block"
        text3.style.display="none"
        text4.style.display="none"
    }
    if (a===2) {
        text3.style.display="block"
        text2.style.display="none"
        text4.style.display="none"
    }
    if (a===3) {
        text4.style.display="block"
        text3.style.display="none"
        text2.style.display="none"
    }
    
    }