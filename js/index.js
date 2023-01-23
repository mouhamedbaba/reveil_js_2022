const inputfirstNumber = document.getElementById("firstNumber")
const inputsecondNumber = document.getElementById("secondNumber")
const inputoperateur = document.getElementById("operateur")
const button = document.getElementById("send-btn")

button.addEventListener("click", function () {
    const valuefirstNumber = Number(inputfirstNumber.value)
    const valuesecondNumber = Number(inputsecondNumber.value)
    const valueoperateur = inputoperateur.value

    Operateur(valuefirstNumber, valueoperateur, valuesecondNumber);

});

function Operateur(valuefirstNumber, valueoperateur, valuesecondNumber) {
    if (valueoperateur === "+" || valueoperateur === "-" || valueoperateur === "*" || valueoperateur === "/"){

        if (valueoperateur === "+") {
            console.log(valuefirstNumber + valuesecondNumber)
        }
        if (valueoperateur === "-") {
            console.log(valuefirstNumber - valuesecondNumber)
        }
        if (valueoperateur === "*") {
            console.log(valuefirstNumber * valuesecondNumber)
        }
        if (valueoperateur === "/") {
            console.log(valuefirstNumber / valuesecondNumber)
        }
    } else{
        console.log("veuiller entrer un operateur valide")
    }
    
}