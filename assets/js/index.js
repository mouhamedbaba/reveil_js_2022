const Nom = document.getElementById("Nom")
const Prenom = document.getElementById("Prenom")
const Age = document.getElementById("Age")
const ol = document.getElementById("ol")

function modify (TrorOrfalse, color) {
  document.getElementById("Nom").disabled = TrorOrfalse;
  document.getElementById("Nom").style.borderColor = color;
  document.getElementById("Prenom").disabled = TrorOrfalse;
  document.getElementById("Prenom").style.borderColor = color;
  document.getElementById("Age").disabled = TrorOrfalse;
  document.getElementById("Age").style.borderColor = color;
  document.getElementById("btn").disabled = TrorOrfalse;
  document.getElementById("btn").style.backgroundColor = color;
  document.getElementById("btn").style.borderColor = color;
}

const tablesListes = []


function confirmNmbreUser() {
  nombres = document.getElementById("NombrDeUser")
  nombres = Number(nombres.value)
  if (nombres >= 1) {
    document.getElementById("NombrDeUser").disabled = true
    document.getElementById("refreshBtn").innerHTML = `<button type="button" class="btn btn-dark my-2 py-2" onClick= "window.location.reload()"><label for="NombrDeUser" class="form-label">Modifier</label></button>`
    modify (false, "green")
    document.getElementById("p").innerHTML = 0 + "/" + nombres
  } else {
    alert("veuiller aisir le nombre de user")
  }
}
let i =0 
function infoUser() {
  const tablesListe = ""
  const userInfoObject = {
    "name": Nom.value,
    "secondName": Prenom.value,
    "age": Age.value
  }

  if (Nom.value === "" || Prenom.value === "" || Age.value === 0) {
    alert("tous les champs requis")
  } else { 
    tablesListes.push(userInfoObject)
    i++
  }
  document.getElementById("form").reset()
    if(tablesListes.length === nombres){
      ol.innerHTML = ""
      tablesListes.forEach(tablesListe => {
        const li = document.createElement("li")
        li.innerHTML = tablesListe.name + " " + tablesListe.secondName + " " + tablesListe.age + " ans"   
         console.log(tablesListe)
        ol.appendChild(li)
        modify (true, "red")
      });
    }
    document.getElementById("p").innerHTML = i + "/" + nombres
} 