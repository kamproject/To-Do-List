let btn=document.getElementById("addButton");
let toDoContainer=document.getElementById("tdsContainer");
let inputField=document.getElementById("inputSlot");

btn.addEventListener("click",function(){
    var p=document.createElement('p');
    p.classList.add("paragraph-styling");
    p.innerText=inputField.value;
    toDoContainer.appendChild(p);
    inputField.value="";

    p.addEventListener("click",function(){
        p.style.textDecoration = "line-through";
    })

    p.addEventListener("dblclick",function(){
        toDoContainer.removeChild(p);
    })
})