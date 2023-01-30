const inputfirstNumber = document.getElementById("firstNumber")
const inputsecondNumber = document.getElementById("secondNumber")
const button = document.getElementById("send-btn")

button.addEventListener("click", function (e) {
    const valuefirstNumber = inputfirstNumber.value
    const valuesecondNumber = inputsecondNumber.value
    // const valueoperateur = inputoperateur.value
    e.preventDefault()
    let return_password = motDePasse(valuefirstNumber)
    verify(return_password, valuesecondNumber)
});

function motDePasse(valuefirstNumber) {
    return valuefirstNumber
}
function verify(return_password, valuesecondNumber) {
    if (return_password === '' && valuesecondNumber === '') {
        document.getElementById("secondNumber").style.borderColor = "red";
        document.getElementById("firstNumber").style.borderColor = "red";
        document.getElementById("verify").innerHTML = "les champ sont vides";
        document.getElementById("verify").style.color = "red";

    } else if (return_password === valuesecondNumber) {
        console.log(" mot de passe correct")
        document.getElementById("secondNumber").style.borderColor = "green";
        document.getElementById("firstNumber").style.borderColor = "green";
        document.getElementById("verify").innerHTML = "mot de passe valide";
        document.getElementById("verify").style.color = "green";
    } else {
        console.log(" le mot de passe ne corespond pas au premier")
        document.getElementById("secondNumber").style.borderColor = "red";
        document.getElementById("firstNumber").style.borderColor = "red";
        document.getElementById("verify").innerHTML = "les mots de passes ne corespondent pas";
        document.getElementById("verify").style.color = "red";

    }
}



