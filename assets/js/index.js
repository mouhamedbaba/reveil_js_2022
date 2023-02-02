const Nom = document.getElementById("Nom")
const Prenom = document.getElementById("Prenom")
const Age = document.getElementById("Age")

function InfoUser(){

  const InfoStock = {
    "FirstName" : Nom.value,
    "SecondName" : Prenom.value,
    "Old" : Number(Age.value)
  }

  if (InfoStock.FirstName === "" || InfoStock.SecondName === "" || InfoStock.Old === null){
    alert("veuiller entrer tous les champ")
  } else{
   document.getElementById("FirstName").innerHTML ="Nom : " + InfoStock.FirstName
    document.getElementById("SecondName").innerHTML ="Prenom : " + InfoStock.SecondName
    document.getElementById("Old").innerHTML ="Age : " + InfoStock.Old + " ans"
  }
}

