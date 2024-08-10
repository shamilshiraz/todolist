let inputbox=document.getElementById("inputbox")
let addbtn=document.getElementById("addbtn")
let todolist=document.getElementById("todolist")


addbtn.addEventListener('click',function(){
    var paragrapph = document.createElement('p');
    paragrapph.innerText=inputbox.value
    todolist.appendChild(paragrapph)
    inputbox.value=''
    paragrapph.addEventListener('click',function(){
        paragrapph.style.textDecoration="line-through"
    })
    paragrapph.addEventListener('dblclick',function(){
        todolist.removeChild(paragraph)
    })
})