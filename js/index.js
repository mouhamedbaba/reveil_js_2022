const inputfirstNumber = document.getElementById("firstNumber")
const inputsecondNumber = document.getElementById("secondNumber")
const inputoperateur = document.getElementById("operateur")
const button = document.getElementById("send-btn")

button.addEventListener("click", function (e) {
    const valuefirstNumber = Number(inputfirstNumber.value)
    const valuesecondNumber = Number(inputsecondNumber.value)
    const valueoperateur = inputoperateur.value

     e.preventDefault()
    // console.log(valuefirstNumber)
    let result =  operations(valuefirstNumber, valueoperateur, valuesecondNumber)
    console.log(result)
});

function operations(valuefirstNumber, operateur, valuesecondNumber) {
    if (operateur === "+") {
        const somme = valuefirstNumber + valuesecondNumber
        return somme
        console.log(somme)
    }
    if (operateur === "-") {
        const soustraction = valuefirstNumber - valuesecondNumber
        console.log(soustraction)
    }
    if (operateur === "*") {
        const produit = valuefirstNumber * valuesecondNumber
        console.log(produit)
    }
    if (operateur === "%") {
        const modulo = valuefirstNumber % valuesecondNumber
        console.log(modulo)
    }

}