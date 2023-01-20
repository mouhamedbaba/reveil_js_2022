var input1 = document.getElementById("value1")
var input2 = document.getElementById("value2")
var button = document.getElementById("send-btn")

button.addEventListener("click", function () {
    const value1 = Number(input1.value)
    const value2 = Number(input2.value)

    console.log("vous avez saisi " + value1 + " et " + value2)

    // console.log('le produit ' + value1 + '*' + value2 + 'est  :')

    if (value1 > value2) {
        console.log( value1 + " > " + value2)
    } else if (value1 === value2) {
        console.log( value2 + " = " + value1)
    }else {
        console.log( value2 + " < " + value1)
    }
});