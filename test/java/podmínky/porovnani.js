
let cislo1 =parseFloat(prompt("první číslo"))
let cislo2 =parseFloat(prompt("druhé číslo"))
// pro porovnání píšeme 3x = (===)
// pokud se číslo rovná 10...
if (cislo1 === cislo2) {
    // ...proveď tento příkaz
    console.log("Čísla jsou stejná")
// nebo pokud se číslo rovná 5...
} else if (cislo1 < cislo2) {
    // ...proveď tento příkaz
    console.log("Číslo které jste zadal první je menší")
// v ostatních případech (else)...
} else {
    // ...proveď tento příkaz
    console.log("Číslo které jste zadali jako první je větší ")
}

// alert("Pozor!!!")