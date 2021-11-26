
document.addEventListener("DOMContentLoaded",() => {
    const form = document.getElementById("form");

    form.addEventListener("submit",event => {
        event.preventDefault()
        const elementbuttonadd = document.getElementById("add");
        const elementlist = document.getElementById("list");
        let list = [];
        let i = 0;
        const elementinput = document.getElementById("input");
        elementbuttonadd.addEventListener("click",() => {
            i++;
            elementlist.innerHTML = elementlist.innerHTML + `<li id='${i}' >`+`<input id='C${i}' onclick="updateItem(${i})" type="checkbox" >` + elementinput.value + '<button  style="width: 50px" onclick="del("+(i+1)+")">&#128298;</button>' + "</li>";
            list.push(i);
        })

    })
})
function del(id){
    const elementdel = document.getElementById(id);
    elementdel.parentNode.removeChild(elementdel);
}
function updateItem(id) {
    if (document.getElementById("C" + id).checked) {
        document.getElementById(id).style.textDecoration = "line-through";
    }
}
