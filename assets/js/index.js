const liste = document.getElementById("liste")
const Alphabet = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ]
let valeur =  Alphabet
for (var i = 0; i < 26; i++ ) {
  console.log(i + Alphabet[i] )
  const li = document.createElement("li")
  li.innerHTML = Alphabet[i]
  liste.appendChild(li)
 }
 
