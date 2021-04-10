
//.(1)...Traversing the DOM.....
// const btns = document.querySelectorAll(".que-btn");

// btns.forEach(function (btn){
//    btn.addEventListener('click',function(e){
//       const question= e.currentTarget.parentElement.parentElement.parentElement;
//       question.classList.toggle("show-text")
//    })
// })



//.(2)...Using Selector Inside the Element.....
const questions = document.querySelectorAll(".que-container");

questions.forEach(function(question){
   
const btn = question.querySelector(".que-btn");

btn.addEventListener('click', function(){
   question.classList.toggle("show-text");
})
})