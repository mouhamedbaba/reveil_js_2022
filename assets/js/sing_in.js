const mail = document.getElementById("Email")
const motdepasse = document.getElementById("password")
const btn = document.getElementById("sing_in-btn") 
       
let verifyEmail = localStorage.getItem("email")
let verifypassword = localStorage.getItem("password")


btn.addEventListener("click", function (e){
    e.preventDefault
    const email = mail.value 
    const password = motdepasse.value

    if (verifyEmail === email && verifypassword === password ){
        window.location.href = "D:/projets/informatique/JavaScript/index.html"
    } else{
        alert("identifiants incorrectent")
        }
});