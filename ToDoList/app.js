const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//......Event Listners.....
todoBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

//......Functions.....
function addTodo(e){
   e.preventDefault(); //prevents form from submitting

   if(todoInput.value===""){
     alert("Can't add an empty list!")
   }
   else{
      //creating a div element
   const todoDiv = document.createElement('div');
   todoDiv.classList.add("todo");

   //creating li element
   const newTodo = document.createElement('li');
   newTodo.innerText= todoInput.value ;
   newTodo.classList.add('todo-item');

   
   //adding li to the div
   todoDiv.appendChild(newTodo);

   //Button...(Completed)
   const completedBtn= document.createElement('button');
   completedBtn.innerHTML = '<i class="fas fa-check">';
   completedBtn.classList.add("complete-btn");

   //append the button to div
   todoDiv.appendChild(completedBtn);


   //Button...(Trash)
   const trashBtn= document.createElement('button');
   trashBtn.innerHTML = '<i class="fas fa-trash">';
   trashBtn.classList.add("trash-btn");

   //append the button to div
   todoDiv.appendChild(trashBtn);

  
   //append the div to todolist ul
   todoList.appendChild(todoDiv);

   //clear todoInput value
   todoInput.value="";
   }
   
}

function deleteCheck(e){
   const item = e.target;

   //Delete ToDo
   if (item.classList[0]=== "trash-btn"){
      const todo = item.parentElement;
      todo.classList.add("fall");
      todo.addEventListener('transitionend',function(){
         todo.remove();
      });
      
   }

   //Check ToDo
   if(item.classList[0]==="complete-btn"){
      const todo = item.parentElement;
      todo.classList.toggle("completed");
   }
}

//......Filter Options
function filterTodo(e){
const todos = todoList.childNodes;
todos.forEach(function(todo){
   switch(e.target.value){
      case "all":
         todo.style.display='flex';
         break;
      case "completed":
         if(todo.classList.contains('completed')){
            todo.style.display="flex";
         }
         else{
            todo.style.display="none";
         }
         break;
      case "uncompleted":
         if(!todo.classList.contains('completed')) {
            todo.style.display="flex";
         }  
         else{
            todo.style.display="none";
         }
         break;
   }
});
}