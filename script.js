function addtodo(){
    const inputEl = document.querySelector("input");
    const value = inputEl.value;
    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id",ctr);
  
    newDivEl.innerHTML = "<div>" + value + "<button onclick = 'deletetodo(" + ctr + ")' >delete</button>";

    document.querySelector("body").appendChild(newDivEl)
    ctr = ctr + 1
}

let ctr = 1;
function deletetodo(index){
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
   

}