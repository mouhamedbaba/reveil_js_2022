const card = document.getElementById("card")
card.classList.add("card");

const imgHead = document.createElement("div")
imgHead.classList.add("img-head");
const img = document.createElement("img")
img.src = "https://source.unsplash.com/random/200x200?sig=2"

const title = document.createElement("p")
title.innerHTML = "card"
title.classList.add("title");

const parag = document.createElement("p")
const parag1 = document.createElement("span")
parag1.style.color = "black"
parag1.innerHTML = "bonjour tous"
const parag2 = document.createElement("span")
parag2.style.color = "red"
parag2.innerHTML = " le monde"

const divBtn = document.createElement("div")
divBtn.classList.add("content")
const button = document.createElement("button")
button.classList.add("button")
button.innerHTML = "submit"

imgHead.appendChild(img)
card.appendChild(imgHead)
card.appendChild(title)
parag.appendChild(parag1)
parag.appendChild(parag2)
card.appendChild(parag)
divBtn.appendChild(button)
card.appendChild(divBtn)

