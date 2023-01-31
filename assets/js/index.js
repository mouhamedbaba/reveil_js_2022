const card = document.getElementById("card")
const ElementHtml = `<div class="col-6">
<div class="container card py-5 my-5">
  <div class="img-head"> <img src="https://source.unsplash.com/random/200x200?sig=2" /></div>
  <div class="title">card</div>
  <div class="paragrphe">ceci est une carte fait avec html et css directement dans java script</div>
  <div class="content">
    <button class="button">submit</button>
  </div>
</div>
</div>
</div>`
 
card.innerHTML = ElementHtml

