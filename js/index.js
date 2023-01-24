const inputfirstNumber = document.getElementById("firstNumber")
const inputsecondNumber = document.getElementById("secondNumber")
const inputoperateur = document.getElementById("operateur")
const button = document.getElementById("send-btn")

button.addEventListener("click", function () {
    const valuefirstNumber = Number(inputfirstNumber.value)
    const valuesecondNumber = Number(inputsecondNumber.value)
    const valueoperateur = inputoperateur.value
          
});
function somme (){
  const somme = valuefirstNumber + valuesecondNumber
    console.log(somme)
}
function soustraction (){
  const  soustraction = valuefirstNumber - valuesecondNumber
    console.log(soustraction)
}
function produit (){
  const produi = valuefirstNumber * valuesecondNumber
    console.log(produi)
}
function modulo (){
  const  modulo = valuefirstNumber % valuesecondNumber
    console.log(modulo)
}