const button = document.querySelectorAll('.button');
const display= document.getElementById('display');
const calculate= document.getElementById('calculate');
const clearBtn = document.querySelector('.clearBtn');

button.forEach(function(btn){
 btn.addEventListener('click',function(){
    let val= btn.value;
    let input= calculator.display.value+=val;

    calculate.addEventListener('click',function(){
    let final = eval(input);
    calculator.display.value = final;
   });
   
 });
});

clearBtn.addEventListener('click',function(){
      calculator.display.value='';
      
   });


