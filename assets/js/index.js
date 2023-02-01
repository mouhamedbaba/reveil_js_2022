const input = document.getElementById("input")
const display = document.getElementById("display")
const table = []

function AddTablelist(){ 
  let i=0
  do{
    let saisie = prompt("enter queque chose ")
    if (saisie != null) {
      table.push(saisie)
      console.log(table)
    }
     i++
     console.log(i)
  }while (i < 10)
  display.innerHTML = table
}
