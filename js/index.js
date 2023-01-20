var input1 = document.getElementById("value1")
var input2 = document.getElementById("value2")
var button = document.getElementById("send-btn")

button.addEventListener("click", function () {
    const tab = ["0", "janvier", "fevrier", "mars" , "avril", "mai", "juin", "juillet", "aout", "septembre" ,"octobre", "novembre" , "decembre"]
    const value1 = Number(input1.value)
          if(value1 > 0 && value1 <= 12) { 
              console.log("vous etes né en  "+ tab[value1])
         } else{
            console.log(value1 + " ne corespond a aucun moi")
         }
}); 