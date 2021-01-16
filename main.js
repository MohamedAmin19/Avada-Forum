//Loader
window.onload=()=>{
    document.querySelector(".loader").style.display="none";
}
//active class
var links =document.querySelectorAll(".nav-link");
links.forEach(link=>{
    link.addEventListener("click",()=>{
        removeactive()
        link.classList.add("active")
    })
})
function removeactive(){
    links.forEach(link=>{
        link.classList.remove("active");
    })
}
