
const btn = document.querySelector(".btn");
const display = document.getElementById("book-list");
const inputs = document.querySelectorAll(".form-control")
const showAlert = document.querySelector(".alert");

//....Event Listner
btn.addEventListener('click',addBook);


//....Functions
function addBook(e){
   e.preventDefault();
    const tr = document.createElement('tr');
    const deleteBtn = document.createElement('button');
   deleteBtn.innerHTML = '<i class="fas fa-trash">';
   deleteBtn.classList.add("delete-btn")

   
   // const td = document.createElement('td');
   // td.innerText=title.target.value;
   // tr.appendChild(td);
   // display.appendChild(tr);
inputs.forEach(function(ip){
   
   const values= ip.value;
   const td = document.createElement('td');
   
   td.innerText= values;
   tr.appendChild(td);
   display.appendChild(tr);
   tr.appendChild(deleteBtn);
   ip.value="";
   
   //adding the alert and removing it after 3 seconds
   showAlert.classList.add("alert-success")
   showAlert.innerText="Your book has been added successfully"
   setTimeout(function(){
      showAlert.classList.remove("alert-success")
   },3000)
   
})

deleteBtn.addEventListener('click',function(){
 tr.remove();
 showAlert.classList.add("alert-danger")
   showAlert.innerText="Your book has been removed successfully"
   setTimeout(function(){
      showAlert.classList.remove("alert-danger")
   },3000)
});
}
