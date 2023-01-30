const texte = document.getElementById("texte")
const button = document.getElementById("send-btn")

texte.addEventListener("keyup", function (e) {

        const message = texte.value
        let taille = message.length
        let restant = (150 - taille) + " restant"

    document.getElementById("print").innerHTML = taille + " / 150"
    document.getElementById("reste").innerHTML = restant
  
    if (taille >= 0 && taille <= 150) {
    document.getElementById("send-btn").disabled = false;
    document.getElementById("texte").style.borderColor = "whitesmoke"
    if (taille <= 100){
        document.getElementById("reste").style.color = "green" 
    } else if (taille > 100 && taille <= 130){
        document.getElementById("reste").style.color = "orange" 
    }  else {
        document.getElementById("reste").style.color = "red"
    }  
    } else{
        document.getElementById("send-btn").disabled = true;
        document.getElementById("texte").style.borderColor = "red"
        document.getElementById("reste").innerHTML = (taille - 150) + " de trop"
    }
    e.preventDefault()
});




