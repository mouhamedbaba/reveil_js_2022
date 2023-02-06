const mail = document.getElementById("newEmail")
const motdepasse = document.getElementById("newPassword")
const confirmMotDePasse = document.getElementById("confirmpassword")
// const checktermes = document.getElementById("check")
const btn = document.getElementById("sing_up-btn")
const Texter = document.getElementById("exemple")

btn.addEventListener("click", function (e) {
    e.preventDefault
    const email = mail.value
    const newPassword = motdepasse.value
    const confirmPassWord = confirmMotDePasse.value
    if (email === "" || newPassword === "" || confirmPassWord === "") {
        alert("veiller remplire toutes les champs")

    } else {
        if (newPassword != confirmPassWord) {
            alert("les mots de passes ne sont pas identiques")
        } else {
            console.log(email)
            console.log(newPassword)
            console.log(confirmPassWord)
            localStorage.setItem("email", email)
            localStorage.setItem("password", newPassword)
            window.location.href = "D:/projets/informatique/JavaScript/auth/success_log.html"
            
        }
    }
});