const inputNom = document.getElementById("nom")
const inputGenre = document.getElementById("genre")
const inputHeure = document.getElementById("heure")
const button = document.getElementById("send-btn")

button.addEventListener("click", myListener);


function myListener() {

    // const tab = ["0", "janvier", "fevrier", "mars" , "avril", "mai", "juin", "juillet", "aout", "septembre" ,"octobre", "novembre" , "decembre"] 

    const valueHeure = Number(inputHeure.value)
    const valueGenre = inputGenre.value.toUpperCase()
    const valueNom = inputNom.value

    if (valueGenre === "M") {
        afficheMessage("Mr", valueHeure, valueNom);
    } else if (valueGenre === "F") {
        afficheMessage("Mme", valueHeure, valueNom);
    } else {
        console.log("les donnees entrees sont invalides")
    }

}

function afficheMessage(genre, heure, nom) {
    if (heure >= 5 && heure <= 12) {
        console.log(`Bonjour ${genre} ${nom}`)
    } else if (heure >= 12 && heure <= 15) {
        console.log("bonne apres midi " + genre + " " + nom)
    } else {
        console.log("bonsoir " + genre + " " + nom)
    }
}
