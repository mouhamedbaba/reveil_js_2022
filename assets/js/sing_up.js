const mail = document.getElementById("newEmail")
const motdepasse = document.getElementById("newPassword")
const confirmMotDePasse = document.getElementById("confirmpassword")
// const checktermes = document.getElementById("check")
const btn = document.getElementById("sing_up-btn")
const Texter = document.getElementById("exemple")

btn.addEventListener("click", function (e) {
    e.preventDefault()
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
            document.getElementById("popup").innerHTML = 
            ` 
            <div class="modal fade show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-modal="true" role="dialog" style="display: block;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <a href="D:/projets/informatique/JavaScript/auth/sing_in.html" class="btn btn-primary" >Understood</a>
      </div>
    </div>
  </div>
</div>
`
            
            // window.location.href = "D:/projets/informatique/JavaScript/auth/sing_in.html"


        }
    }
});