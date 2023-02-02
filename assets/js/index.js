const nom = document.getElementById("Nom")
const prenom = document.getElementById("Prenom")
const age = document.getElementById("Age")
const tabUserListe = []
function infoUser(event) {
  const infoStock = {
    "name": nom.value,
    "secondName": prenom.value,
    "old": Number(age.value)
  }
  if (infoStock.name === "" || infoStock.secondName === "" || infoStock.old === 0) {
    alert("veuiller entrer tous les champ")
  } else {
    tabUserListe.push(infoStock)
  }
  // console.log(tabUserListe)
  document.getElementById("ol").innerHTML = ""
  // tabUserListe.forEach(function(user) {
  //   const li = document.createElement("li")
  //   li.innerHTML = user.name + " " +  user.secondName + " " +  user.old
  //   document.getElementById("ol").appendChild(li)
  // })
  // let i = length.tabUserListe
  // for (i = 0; i < 20; i++) {
  //   const li = document.createElement("li")
  //   li.innerHTML = tabUserListe[i].name + " " + tabUserListe[i].secondName + " " + tabUserListe[i].old
  //   document.getElementById("ol").appendChild(li)
  //   console.log(tabUserListe)

  //   document.getElementById("formulaire").reset()
  // }

  tabUserListe.forEach(tab => {
    const li = document.createElement("li")
    li.innerHTML = tab.name + " " + tab.secondName + " " + tab.old
    document.getElementById("ol").appendChild(li)
    console.log(tab)

    document.getElementById("formulaire").reset()

  });

  // const li = document.createElement("li")
  // li.innerHTML = tabUserListe[1].name + " " +  tabUserListe[1].secondName + " " +  tabUserListe[1].old
  // document.getElementById("ol").appendChild(li)
}