var input1 = document.getElementById("value1")
var input2 = document.getElementById("value2")
var button = document.getElementById("send-btn")

button.addEventListener("click", function () {

    // const tab = ["0", "janvier", "fevrier", "mars" , "avril", "mai", "juin", "juillet", "aout", "septembre" ,"octobre", "novembre" , "decembre"] 
   
   const value1 = Number(input1.value)

   while( value1 < 0) {
      console.log("veiller saisir un positif number" )
   break
 }

   for ( let i = 1; i <= value1; i++){
      let np = 0
      for (  let k = 1; k <= i; k++){
         if ( i % k == 0)
         np++;
      } if ( np  === 2 ){
        console.log( "ce nombre est premier")
      } else {
        console.log( "ce nombre n'est pas premier")
      }
   }
  
}); 