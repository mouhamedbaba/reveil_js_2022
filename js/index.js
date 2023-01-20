var input1 = document.getElementById("value1")
var input2 = document.getElementById("value2")
var button = document.getElementById("send-btn")

button.addEventListener("click", function () {
    const value1 = Number(input1.value)
    // const value2 = Number(input2.value)

    

    console.log("vous avez saisi " + value1 )

    // console.log('le produit ' + value1 + '*' + value2 + 'est  :')
 
        if (value1 >= 0 && value1 <=10  ){
            console.log('ce nombre est compris entre 0 et 10')
        } else{
            console.log("ce nombre n'est pas compris entre 0 et 10")
        }

});