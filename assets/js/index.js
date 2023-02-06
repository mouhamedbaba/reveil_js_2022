const heureDereveil = document.getElementById("heureDereveil")
const minuteDereveil = document.getElementById("minuteDereveil")
const secondDereveil = document.getElementById("secondDereveil")
const button = document.getElementById("send-btn")
button.addEventListener("click", function (e) {
  e.preventDefault()
  const heure = Number(heureDereveil.value)
  const minute = Number(minuteDereveil.value)
  const seconde = Number(secondDereveil.value)
  const milisecondeheure = Math.floor(heure * 60 * 60 * 1000)
  const milisecondeminute = Math.floor(minute * 60 * 1000)
  const totalMillisecondeUser = milisecondeheure + milisecondeminute + seconde
  console.log(totalMillisecondeUser)

  const dateALinstant = new Date()
  const heuresysteme = dateALinstant.getHours();
  const minutesysteme = dateALinstant.getMinutes();
  const secondesystem = dateALinstant.getSeconds();
  const total = Math.floor(heuresysteme * 60 * 60 * 1000) + Math.floor(minutesysteme * 60 * 1000) + Math.floor(secondesystem * 1000)
  console.log(totalMillisecondeUser + "/ " + total)
  const diff = total - totalMillisecondeUser
  console.log(diff)

  setTimeout(Alarme, diff)
});

function Alarme() {
  alert("heure de reveil")
}