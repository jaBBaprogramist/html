
document.addEventListener("DOMContentLoaded",() => {

    const elementbuttonadd = document.getElementById("add");
    const elementlist = document.getElementById("list");
    let list = [];
    let i = 0;
    const elementinput = document.getElementById("input");
    elementbuttonadd.addEventListener("click",() => {
        i++;
        document.getElementById("list").innerHTML = elementlist.innerHTML + "<li id = i onclick='del()'>" + document.getElementById("input").value +"<button style=\"width: 50px\">&#128298;</button>" + "</li>";
        list.push(i);
    })
})
function del(){

}