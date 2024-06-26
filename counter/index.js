var element = document.getElementById('number')
var value = parseInt(element.textContent);

console.log(value)


function decrease(){
    value=value-1
    element.textContent = value;
    if (value>0 ){
        element.style.color="green"
    }
    else{
        element.style.color="red"
    }
}

function reset(){
    value=0
    element.textContent=value
    if (value==0 ){
        element.style.color="green"
    }
    
}
function increase(){
    value++
    element.textContent=value
    if (value>0 ){
        element.style.color="green"
    }
    else{
        element.style.color="red"
    }
}




var decreaseBtn=document.getElementById('decrease')
var resetBtn=document.getElementById('reset')
var increasetBtn=document.getElementById('increase')

decreaseBtn.addEventListener("click",decrease)
resetBtn.addEventListener("click",reset)
increasetBtn.addEventListener("click",increase)
