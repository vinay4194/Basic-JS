const inputs = document.querySelectorAll(".input");
const btn = document.querySelector(".btn");
const result= document.querySelector(".result-container");


btn.addEventListener('click',calcP);

function calcP(){
let sum=0;

inputs.forEach(function(ip){
   sum += Math.floor(ip.value);
});

let percentage= (sum/500)*100;
percentage= percentage.toFixed(2);

const output =document.createElement('h2');
output.innerText=`Out of 500, Your total is  ${sum} and the Percentage is ${percentage} %`;
result.appendChild(output);
}