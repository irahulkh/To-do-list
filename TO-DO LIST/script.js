
let addButton = document.getElementById("addButton");
let list = document.getElementById("myList");
let input = document.getElementById("input");

function addItem(){
    if(input.value === ''){
        alert("you must write something!!")
    }
    else{
    let item = document.createElement("li");
    item.textContent=input.value;
    item.onclick = function(){
        list.removeChild(item);
    }
    list.appendChild(item); 
    }

    input.value = "";
    saveData();
}
addButton.addEventListener("click", addItem);


function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}

