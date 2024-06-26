let buttons = document.querySelectorAll('.hand')
var result=document.getElementById("result1")
var result2=document.getElementById("result2")
var firstPlayer = document.getElementById("firstplayer")
var secondPlayer = document.getElementById("secondplayer")
var nextPlayer = document.getElementById("nextplayer")
var firstResult = 0
var secondResult = 0

let buton=document.getElementById("btnstart")
buton.addEventListener("click",function(){
    result.style.display="block";
    result2.style.display="block";
   
    nextPlayer.style.display="block";
})

let selected = [];

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        console.log("clciked=", button.id)



        selected.push(button.id)
        console.log("selected", selected)



        if(selected.length==0 || selected.length==2){
            nextPlayer.innerHTML="Current Player : 1"
        }
        else{
            nextPlayer.innerHTML="Current Player : 2"
        }

        if (selected.length === 2) {
            if ((selected[0] === "scissors" && selected[1] === "paper") ||
                (selected[0] === "rock" && selected[1] === "scissors") ||
                (selected[0] === "paper" && selected[1] === "rock")) {

                    firstResult += 1;
                    firstPlayer.innerHTML = "First Player: " + firstResult;


            }
            else if  ((selected[1] === "scissors" && selected[0] === "paper") ||
                      (selected[1] === "rock" && selected[0] === "scissors") ||
                      (selected[1] === "paper" && selected[0] === "rock")) {

                        secondResult += 1;
                        secondPlayer.innerHTML = "Second Player: " + secondResult;

            }
            selected = []
        }





    }
    )



})











