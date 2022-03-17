//const comp=document.querySelectorAll('button')[0]
//const pending=document.querySelectorAll('button')[1]
//comp.addEventListener("click",complete)
//pending.addEventListener("click",pending)
// async function fetchTodos(){
//     let data ;
//     await fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(result => {data = result})
//     //let data = await res.json();
//     let output= '';
//     data.forEach (function(todo, index) {
//         if (todo.completed===true){
//         output +=`<p key=${index}>${todo.title}</p>`
//         }
   
//     });
//     document.querySelector('.todos').innerHTML = output;
// }
// fetchTodos();
// function pending(){
//     await fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(result =>{data= result})
//     console.log(data)
//     let output1= '';
//     data.forEach(function(todo, index){
//         if (todo.completed===false){
//             output1 +=`<p key=${index}>${todo.title}</p>`
//         }
//     });
//     document.querySelector('.todos').innerHTML = output1;
// fetchTodos();
// }


// document.getElementById("List1").innerHTML = li;
// })
// }
// function pend(){
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(Response=>Response.json())
//     .then(json =>{
//     let li=`<tr><th>ITEM ID</th><th>TASK</th></tr>`
//     json.forEach(todo => {
//         if (todo.completed==false){
//             li+=`<tr><td>${todo.id} </td><td>${todo.title} </td></tr>`
//         }
//     });
//     document.getElementById("List2").innerHTML = li;
//     })
// }
// async function fetchTodos(){
//     let res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     let data = await res.json();
//     let output= '';
//     data.foreach(function(todo, index){
//         output +=`<p key = ${index}>${todo.title}</p>`
//     });
//     document.querySelector('.todos').innerHTML = output;
// }
// fetchTodos();


// new code
const comp=document.querySelectorAll('button')[0]
const pending=document.querySelectorAll('button')[1]

function done(){
fetch("https://jsonplaceholder.typicode.com/todos")
.then(Response=>Response.json())
.then(json =>{
let li=`<tr><th>ITEM ID</th><th>TASK</th></tr>`
json.forEach(todo => {
    if (todo.completed==true){
        li+=`<tr><td>${todo.id} </td><td>${todo.title} </td></tr>`
    }
});
document.getElementById("List1").innerHTML = li;
})
}

function pend(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(Response=>Response.json())
    .then(json =>{
    let li=`<tr><th>ITEM ID</th><th>TASK</th></tr>`
    json.forEach(todo => {
        if (todo.completed===false){
            li+=`<tr><td>${todo.id} </td><td>${todo.title} </td></tr>`
        }
    });
    document.getElementById("List2").innerHTML = li ;
    })
}




comp.addEventListener("click",done)
pending.addEventListener("click",pend)