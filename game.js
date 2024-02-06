let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara= document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice=()=>{
    const options = ["paper", "scissors", "rock"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    // console.log("Game was draw");
    msg.innerText="Game was draw. Play again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You win!!!")
        msg.innerText=`You win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You lose");
        msg.innerText=`You lose... ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user's choice: ", userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice: ", compChoice);

    //draw game
    if(userChoice===compChoice){
        drawGame();
    }
    else {
        let userWin =true;
        if(userChoice==="rock"){
            //scissors, paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //scissors, rock
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //paper, rock
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})
