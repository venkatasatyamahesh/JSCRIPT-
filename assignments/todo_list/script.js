// let count = 0;
// document.querySelector('#AddTodo').onclick=function(){
//     let input=document.querySelectorAll('#todoinput').value;
//     if(input.lenght === 0){
//         alert("Please enter a name");
//     }else{
//         document.querySelector('.todos').innerHTML += `
//              <p key=${count}>
//                  <span class = "task">
//                  ${input}
//                  </span>
//              </p>
//              `;
//              count++;
//              let currentTasks = document.querySelectorAll('.task');
//              for (let i=0;i<currentTasks.length;i++){
//                  currentTasks[i].onclick=function(){
//                      this.parentNode.removeChild();

//     }
//                  }
//              }
//     }

// var input=document.querySelectorAll('input');
// let button=document.querySelectorAll("button");
// let todos=document.querySelectorAll('div.todos');
// document.querySelector(AddTodo).onclick=function(){
//     let main = document.querySelectorAll('todoinput').value
//     document.querySelector('.todo').innerHTML                    
// }

// const newTodoInput = document.querySelector('input');
// const addTodoBtn = document.querySelector('button');
// const todolist = document.querySelector('div.todos');
let counter = 0;
document.querySelector('button').onclick=function(){
    //var Li =document.createElement("Li");
    var text =document.querySelector("input").value;
    let add =document.querySelector('.todos');
    add.innerHTML +=
    `<p key =${counter}>${text}</p>`;

    counter++;
    const currentTasks = document.querySelectorAll('p');
    for (let i=0;i<currentTasks.length;i++){
        currentTasks[i].onmouseover=function(){
                this.remove();

}
    }
}
{/* <div onmouseover="mOver(this)">
Mouse Over Me</div>

<script>
function mOver(obj) {
  obj.innerHTML =" "
} */}