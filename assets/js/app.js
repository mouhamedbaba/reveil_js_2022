const heureDereveil = document.getElementById("heureDereveil")
const minuteDereveil = document.getElementById("minuteDereveil")
const secondDereveil = document.getElementById("secondDereveil")
const button = document.getElementById("send-btn")

let verifyEmail = localStorage.getItem("email")

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  console.log(d.toLocaleTimeString())
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


button.addEventListener("click", function (e) {
  e.preventDefault()
  const heure = Number(heureDereveil.value)
  const minute = Number(minuteDereveil.value)
  const seconde = Number(secondDereveil.value)
  const milisecondeheure = Math.floor(heure * 60 * 60 * 1000)
  const milisecondeminute = Math.floor(minute * 60 * 1000)
  const totalMillisecondeUser = milisecondeheure + milisecondeminute + seconde
  console.log(totalMillisecondeUser)

  const dateALinstant = new Date()
  const heuresysteme = dateALinstant.getHours();
  const minutesysteme = dateALinstant.getMinutes();
  const secondesysteme = dateALinstant.getSeconds();
  const totalMillisecondeSysteme = Math.floor(heuresysteme * 60 * 60 * 1000) + Math.floor(minutesysteme * 60 * 1000) + Math.floor(secondesysteme * 1000)
  console.log(totalMillisecondeUser + "/ " + totalMillisecondeSysteme)
  const diff = totalMillisecondeUser - totalMillisecondeSysteme
  if (heure >= 0 && heure <= 23  && minute>=0 && minute <= 59 && heure === "" && minute === ""){
    setTimeout(Alarme, diff)
  } else{
    alert("veuiller saisir un heure valable")
  }
});
function Alarme() {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "fr"
  speech.text = "youssou, il est l'heure de commit tes projets";
  window.speechSynthesis.speak(speech);
  document.getElementById("popup").innerHTML =
    ` 
  <div class="modal fade show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-modal="true" role="dialog" style="display: block;">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="staticBackdropLabel">REVEIL </h5>
</div>
<div class="modal-body">
<div class="row">
<?xml version="1.0" encoding="utf-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="200px" height="200px" viewBox="0 0 1024 1024" class="icon" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M844.827235 546.429168c0.749484 8.967188 1.370982 17.931304 1.370983 27.022381 0 100.613115-44.51751 190.642328-114.622938 252.156335l35.241109 35.301518c4.666869 4.669941 7.220439 10.834755 7.220439 17.433696s-2.55357 12.827235-7.220439 17.433695c-4.669941 4.669941-10.834755 7.223511-17.433696 7.223511s-12.763754-2.55357-17.433695-7.223511l-40.096373-40.159854c-52.362519 33.684803-114.434543 53.484698-181.304494 53.484698-66.245381 0-127.884301-19.489657-179.874126-52.674805l-39.349961 39.349961a24.53946 24.53946 0 0 1-17.430624 7.223511c-6.602013 0-12.763754-2.55357-17.433695-7.223511-4.669941-4.60646-7.223511-10.835778-7.223511-17.433695s2.55357-12.763754 7.223511-17.433696l34.24282-34.242821c-70.791431-61.57544-115.805526-152.040827-115.805525-253.215032 0-9.7136 0.686003-19.302286 1.494872-28.827491-50.493929-39.971459-80.504008-100.491273-80.504007-165.365671 0-116.430096 94.699154-211.190683 211.190682-211.190683 61.69933 0 119.104484 26.646616 159.324748 73.031693a425.542099 425.542099 0 0 1 20.172588-2.149135v-35.333259c-14.941559-8.406099-25.215224-24.28144-25.215223-42.710353 0-27.147296 21.979746-49.127042 49.12397-49.127041 27.147296 0 49.187451 21.979746 49.187451 49.127041 0 18.428912-10.274689 34.30323-25.278705 42.710353v35.301518c7.596205 0.62457 15.06852 1.494873 22.477354 2.490089 40.220263-46.5704 97.501528-73.340906 159.576624-73.340906 116.427024 0 211.190683 94.759563 211.190683 211.190683-0.001024 66.028317-30.884477 127.291471-82.810822 167.170781z"
        fill="#27323A" />
    <path
        d="M186.104468 488.93084c29.136705-112.132849 114.499048-201.633737 224.512455-235.940039-28.951381-23.812501-65.186683-37.105604-103.53938-37.105604-90.092694 0-163.37319 73.280497-163.37319 163.37319 0 41.058825 15.377734 79.942918 42.400115 109.672453z"
        fill="#79CCBF" />
    <path
        d="M796.886877 573.451549c0-157.832947-128.44539-286.341818-286.338746-286.341817s-286.33977 128.507847-286.33977 286.341817c0 157.89438 128.44539 286.338746 286.338746 286.338746s286.33977-128.444366 286.33977-286.338746z"
        fill="#FFFFFF" />
    <path
        d="M708.384277 575.427648c0-109.005903-88.786216-197.789048-197.83717-197.789048s-197.83717 88.783144-197.837171 197.789048c0 109.094981 88.786216 197.801334 197.837171 197.801334s197.83717-88.705329 197.83717-197.801334z"
        fill="#F4CE73" />
    <path
        d="M879.81954 379.258387c0-90.092694-73.280497-163.37319-163.37319-163.37319-38.912762 0-75.461372 13.445662-104.412754 37.666693 109.892588 34.836674 194.939575 124.801382 223.517238 237.33969 28.082103-29.946598 44.268706-69.577103 44.268706-111.633193z"
        fill="#79CCBF" />
    <path
        d="M662.652439 740.557826l-151.483834-151.41933H380.359064v-31.750683h99.056809l-10.022813-10.024862 15.751452-15.814932 11.143968 11.144991V392.64364h31.817236v181.866607l150.297151 150.297151zM499.964228 310.459437h33.930536v49.24786h-33.930536zM775.5317 590.882173l0.123891-33.930536-49.122947-0.06348-0.124914 33.870126zM750.252996 462.436783l-16.248037-29.69677-43.086118 23.659942 16.251108 29.821684zM664.332635 361.203193l-28.827492-17.807413-25.900203 41.84005 28.951382 17.806389zM707.169949 665.036044l-16.251108 29.697794 43.086118 23.723423 16.248037-29.700866zM638.556322 748.218536l-28.951382 17.806389 25.900203 41.776569 28.827492-17.807413zM294.687507 590.758283l-0.124914-33.870126-49.187451 0.06348 0.124914 33.930536zM313.740989 486.221639l16.435407-29.821684-43.146527-23.659942-16.251108 29.69677zM270.778761 688.756395l16.251108 29.700866 43.146527-23.723423-16.435407-29.697794zM356.699122 789.994081l28.826467 17.807413 25.901227-41.776569-28.8879-17.806389zM499.964228 787.256211h33.930536v49.187451h-33.930536zM387.208857 400.052474l28.951381-17.807413-25.963684-41.839026-28.827491 17.806389z"
        fill="#27323A" />
</svg>
</div>
<div class="row d-flex justify-content-center py-2 my-2 fw-bold">
<span>
</span> ${verifyEmail} <span> 
</div>
<div class="row d-flex justify-content-center py-2 my-2">
<span>
</span> ${new Date().toLocaleTimeString()} <span> 
</div>
</div>
<div class="modal-footer">
<a href="D:/projets/informatique/JavaScript/index.html" class="btn btn-primary" >IGNORER</a>
</div>
</div>
</div>
</d>`

}
