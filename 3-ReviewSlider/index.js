const reviews = [
   {
      id:1,
      name:"adam",
      job: "web developer",
      img: "images/c1.jpg",
      text: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
   },
   {
      id:2,
      name:"smith",
      job: "web designer",
      img: "images/c2.jpg",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto saepe non laboriosam expedita eveniet doloremque facilis perferendis, eum quidem repellendus."
   },
   {
      id:3,
      name:"olivia",
      job: "ui designer",
      img: "images/c3.jpg",
      text: " chitecto saepe non laboriosam expedita eveniet doloremque facilis perferendis, eum quidem repellendus"
   },
   {
      id:4,
      name:"suzan",
      job: "web developer",
      img: "images/c4.jpg",
      text: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
   },
]

const image= document.getElementById("person-img");
const author= document.getElementById("author");
const job= document.getElementById("job");
const text= document.getElementById("info");

const nextBtn= document.querySelector('.next-btn');
const prevBtn= document.querySelector('.prev-btn');

let currentItem=0;

window.addEventListener('DOMContentLoaded', function(){
   slideReview(currentItem);
});
 


function slideReview(person){
const item= reviews[person];
image.src=item.img;
author.textContent=item.name;
job.textContent=item.job;
text.textContent=item.text;
}

nextBtn.addEventListener('click',function(){
  currentItem++;
  if(currentItem>reviews.length){
   currentItem=0;
}
  slideReview(currentItem)
  
   
});
prevBtn.addEventListener('click',function(){
   currentItem--;
   if(currentItem<0){
      currentItem=3;
   }
   slideReview(currentItem);
   
});