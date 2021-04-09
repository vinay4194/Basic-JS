const increase = document.getElementById("btn-3");
const decrease = document.getElementById("btn-1");
const reset = document.getElementById("btn-2");

const count= document.getElementById("count");
let countNumber= 0;



increase.addEventListener('click',function(){
   
countNumber++;
count.textContent=countNumber
if(countNumber >= 1){
   count.style.color="green";
}
else if(countNumber==0){
   count.style.color="black";
}

});

decrease.addEventListener('click',function(){
countNumber--;
count.textContent=countNumber;
if(countNumber <= -1){
   count.style.color="red";
}
else if(countNumber==0){
   count.style.color="black";
}
});

reset.addEventListener('click',function(){
countNumber=0;
count.textContent=countNumber;
count.style.color="black";
});





