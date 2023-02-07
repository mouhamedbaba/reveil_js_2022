const buttons = document.getElementsByTagName("button")

for (let btn of buttons) {

    btn.addEventListener("click", function () {
        console.log('item : ', this.innerHTML)
        document.getElementById("texte").innerHTML += this.innerHTML
    })
}

