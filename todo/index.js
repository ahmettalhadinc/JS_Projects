
function create(){
    
var inputid=document.getElementById("textt").value
var divolustur=document.createElement("div")
divolustur.classList.add("myclass")

var butonsil=document.createElement("button")
butonsil.textContent="Delete Task"
butonsil.style.backgroundColor="red"
butonsil.style.color="white"
butonsil.style.height="30px"


var butonolustur=document.createElement("button")
butonolustur.textContent="Completed"
butonolustur.style.backgroundColor="green"
butonolustur.style.height="30px"
var inputolustur=document.createElement("input")
inputolustur.type="text"
inputolustur.style.borderRadius="5px"
inputolustur.value=inputid
inputolustur.style.color="red"
inputolustur.style.height="30px"

divolustur.appendChild(inputolustur)
divolustur.appendChild(butonolustur)
divolustur.appendChild(butonsil)
divolustur.style.margin = "10px";



var butonbul=document.getElementById("butonlist")
butonbul.appendChild(divolustur)

butonsil.addEventListener("click",function(){
    divolustur.remove();
})

butonolustur.addEventListener("click", function() {
    inputolustur.style.textDecoration = "line-through";
    inputolustur.style.textDecorationColor = "black";
    
});

document.getElementById("textt").value=""



}
document.getElementById("create").addEventListener("click",create)

