const input = document.getElementById("input")
const button = document.getElementById("button")

button.addEventListener("click", function (e){
     const saisie = input.value
     document.getElementById("t1").innerHTML = saisie
  
     e.preventDefault()
});

