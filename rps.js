
//Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

let computerChoice; 

function computerPlay() {
    let randomNumber = (Math.floor(Math.random() * 3));
        if (randomNumber === 0 ) {
            computerChoice = "Rock";
        } else if (randomNumber === 1) {
            computerChoice = "Paper";
        } else if (randomNumber === 2) {
            computerChoice = "Scissors";
    } 
}

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

// const userWins = "You win!";
// const compWins = "You lose!";
// const tie = "You tied!"; 

let playerScore = 0;
let compScore = 0;

function singleRound() {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let toTitleCase = function (playerSelection) {
        playerSelection = playerSelection.toLowerCase().split(' ');
        for (var i = 0; i < playerSelection.length; i++) {
            playerSelection[i] = playerSelection[i].charAt(0).toUpperCase() + playerSelection[i].slice(1);
        }
        return playerSelection.join(' ');
    }
    playerSelection = toTitleCase(playerSelection);
    const computerSelection = computerPlay();
    if (computerChoice === "Rock" && playerSelection === "Rock") {
            alert("You tied!");
            document.getElementById("pFinal") = playerScore+=0;
        } else if (computerChoice === "Rock" && playerSelection === "Paper") {
            alert( "You win! Paper beats rock");
            document.getElementById("pFinal") = playerScore+=1;
        } else if (computerChoice === "Rock" && playerSelection === "Scissors") {
            alert( "You lose! Rock beats scissors");
            document.getElementById("cFinal") = compScore+=1;
        } else if (computerChoice === "Paper" && playerSelection === "Rock") {
            alert("You lose! Paper beats Rock");
            document.getElementById("cFinal") = compScore+=1;
        } else if (computerChoice === "Paper" && playerSelection === "Paper") {
            alert("You tied!");
            document.getElementBvId("pFinal") = playerScore+=0;
        } else if (computerChoice === "Paper" && playerSelection === "Scissors") {
            alert("You Win! Scissors beats Paper");
            document.getElementById("pFinal") = playerScore+=1;
        } else if (computerChoice === "Scissors" && playerSelection === "Rock") {
            alert( "You win! Rock beats scissors");
            document.getElementBvId("pFinal") = playerScore+=1;
        } else if (computerChoice === "Scissors" && playerSelection === "Paper") {
            alert("You lose! Paper beats Rock");
            document.getElementById("cFinal") = compScore+=1;
        } else if (computerChoice=== "Scissors" && playerSelection === "Scissors") {
            alert("You tied!");
            document.getElementById("pFinal") = playerScore+=0;
        } else {
            alert ("Error! Please try again");
        }
        // console.log (playerScore);
        //console.log (compScore);
    }
    singleRound();


//Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.


function game() {
    singleRound();
    singleRound();
    singleRound();
    singleRound();
    singleRound();
}
game();

function finalMessage() {
    if (playerScore > compScore) {
        alert("You've beaten the computer!")
    } else if (playerScore < compScore) {
        alert( "You've lost to the computer!")
    } else if (plaverScore === compScore) {
        alert ("You've tied with the computer!")
    } else {
        alert("Error! Soemthing has gone wrong, please play again")
    }
}
finalMessage();








