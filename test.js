let box = document.getElementById("box")
let add = document.getElementById("add")
let list = document.getElementById("list")
box.value="";
add.onclick =()=>{
    let li=document.createElement("li")
    li.onmouseover=()=>{
        li.setAttribute("id","strikeout")
    }
    li.innerText=box.value;
    list.appendChild(li);
}