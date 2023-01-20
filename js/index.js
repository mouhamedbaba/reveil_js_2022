var input = document.getElementById("value")
var button = document.getElementById("send-btn")
console.log(button)
button.addEventListener("click", function(){
  const value = Number(input.value)
  console.log(value);
  if(value % 2 === 0){
    console.log('ce nombre est paire ')
  } else{
    console.log('ce nombre est impaire ')
  }
});
