const texte = document.getElementById("texte")
const button = document.getElementById("send-btn")

texte.addEventListener("keyup", function (e) {
        const message = texte.value
        let taille = message.length
    document.getElementById("print").innerHTML = taille + " / 150"
    document.getElementById("reste").innerHTML = (150 - taille) + " restant"
    if (taille >= 0 && taille <= 150) {
    document.getElementById("send-btn").disabled = false;
    document.getElementById("texte").style.borderColor = "whitesmoke"
    } else{
        document.getElementById("send-btn").disabled = true;
        document.getElementById("texte").style.borderColor = "red"
        document.getElementById("reste").innerHTML = (taille - 150) + " de trop"
    }
    e.preventDefault()


});




