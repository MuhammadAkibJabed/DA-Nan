const motherChild = document.getElementById("mother-child");
const heart = document.getElementById("heart");
const standBaby = document.getElementById("stand-baby");
const lyingBaby = document.getElementById("lying-baby");
const ear = document.getElementById("ear");
const brain = document.getElementById("brain");
const round = document.getElementById("round");
const respitoryText = document.getElementById("resperitory-text");
const diarrhoeaText = document.getElementById("diarrhoea-text");
const otitisText = document.getElementById("otitis-text");
const overWeightText = document.getElementById("over-weight-text");
const congitiveText = document.getElementById("congitive-text");
const footerText = document.getElementById("footer-text");


function motherChildClick() {
    heart.style.opacity=1;
    standBaby.style.opacity=1;
    lyingBaby.style.opacity=1;
    ear.style.opacity=1;
    brain.style.opacity=1;
    round.style.opacity=1;
    

}
// document.addEventListener("DOMContentLoaded", function () {
//   const respitoryText = document.getElementById("resperitory-text");
//   heart.addEventListener('click',()=>{
//     respitoryText.style.opacity=1;
//   })
// });

  heart.addEventListener('click',function(){
    respitoryText.style.opacity = 0;
  })
lyingBaby.addEventListener("click", function () {
  diarrhoeaText.style.opacity = 1;
});
ear.addEventListener("click", function () {
  otitisText.style.opacity = 1;
});
brain.addEventListener("click", function () {
  congitiveText.style.opacity = 1;
});
standBaby.addEventListener("click", function () {
  overWeightText.style.opacity = 1;
  footerText.style.opacity=1;
});
