const inputfirstNumber = document.getElementById("firstNumber")
// const inputsecondNumber = document.getElementById("secondNumber")
// const inputoperateur = document.getElementById("operateur")
const button = document.getElementById("send-btn")

button.addEventListener("click", function (e) {
    const valuefirstNumber = Number(inputfirstNumber.value)
    // const valuesecondNumber = Number(inputsecondNumber.value)
    // const valueoperateur = inputoperateur.value
    e.preventDefault()
       let resturnAge =  Age (valuefirstNumber) 
       console.log(resturnAge)
});
 function Age (valuefirstNumber){
    const age = 2023 - valuefirstNumber
    if (valuefirstNumber < 2023) {
        return age
        console.log("Vous avez " + age + " ans ")
    } else if (valuefirstNumber === 2023) {
         console.log("vous venez tous juste de naitre")
    } else {
        console.log("vous ne  pouvez pas etre nee apres 2023 quand meme !")
    }
 }
