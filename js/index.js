const inputfirstNumber = document.getElementById("firstNumber")
// const inputsecondNumber = document.getElementById("secondNumber")
// const inputoperateur = document.getElementById("operateur")
const button = document.getElementById("send-btn")

button.addEventListener("click", function (e) {
    e.preventDefault();
    const valuefirstNumber = inputfirstNumber.value
    const full_caract = valuefirstNumber.split("")
    const number_split = full_caract.length
    let chiffre1
    let chiffre2 
    let operateur
    if (number_split == 3){
        chiffre1 = Number(full_caract[0])
        chiffre2 = Number(full_caract[2])
        operateur = full_caract[1]

    } else if (number_split == 5){
        chiffre1 = Number(full_caract[0])
        chiffre2 = Number(full_caract[4])
        operateur = full_caract[2]
    }

    

    if (operateur === "+") {
        const somme = chiffre1 + chiffre2
        console.log(somme)
    }
    if (operateur === "-") {
        const somme = chiffre1 - chiffre2
        console.log(somme)
    }
    if ( operateur === "*") {
        const somme = chiffre1 * chiffre2
        console.log(somme)
    }
    if (operateur === "/") {
        const somme = chiffre1 / chiffre2
        console.log(somme)
    }
    if (operateur === "%") {
        const somme = chiffre1 % chiffre2
        console.log(somme)
    }


});
