const colors= ["green","red","blue","orange","purple","aqua","beige","chocolate","coral","crimson","cyan","gold","khaki","magenta","olive","orchid","plum"];

const btn=document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener('click',function(){

   const randomNumber = getRandomNumber();
   document.body.style.backgroundColor= colors[randomNumber];
   color.textContent= colors[randomNumber];

});

function getRandomNumber(){
   return Math.floor(Math.random()*colors.length);
}