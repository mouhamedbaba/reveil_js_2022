var input1 = document.getElementById("value1")
var input2 = document.getElementById("value2")
var button = document.getElementById("send-btn")

button.addEventListener("click", function () {
    const value1 = Number(input1.value)
    const value2 = Number(input2.value)

    console.log(input1)

    console.log('le produit ' + value1 + '*' + value2 + 'est  :')

    if (value1 * value2 <= 0) {
        console.log('negatif ')
    } else {
        console.log('positif')
    }
}); 