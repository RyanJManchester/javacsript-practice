//ROCK PAPER SCISSORS
//declared global variables needed before functions are called
let compA;
let answerString;
/*run. function that starts the game, and declares a winner.
^prompt for answer
^return of computed result.
^ two inputs needed: playerSelection and Computer Selection
*/
function play() {
    console.log(winner(playerAnswer(),computerAnswer()));
}

// ask player for their answer, and make it into a consistent, confirmed value.
function playerAnswer() {
    let userAnswer;
    userAnswer = prompt("Rock,paper or scissors?");
    return userAnswer.toLowerCase();
    }
//Computer play function - randomly returns rock, paper, or scissors
function computerAnswer() {
    let random;
    random = Math.floor(Math.random() * 3);
    let compA;
    if (random === 0) {
        compA = "rock";
    } else if (random == 1) {
        compA = "paper";
    } else if (random == 2){
        compA = "scissors";
    } else {
        console.log("error,computerAnswer().")
    }
    return compA;
}
/*function that compares player vs computer answer and returns winner as string 
*/
function winner(player,compA) {
    if (player === compA) {
        answerString = `Its a tie! ${player} can't beat ${compA}.`;
    } else if (player == "rock" && compA == "scissors") {
        answerString = "You won! Rock beat's scissors.";
    } else if (player == "paper" && compA == "scissors") {
        answerString = "You lost! scissors cut paper.";
    } else if (player == "scissors" && compA == "paper") {
        answerString = "You won! scissors cut paper.";
    } else if (player == "rock" && compA == "paper") {
        answerString = "You lost! Paper wraps rock."
    } else if (player == "paper" && compA == "rock") {
        answerString = "You won! paper wrap's rock.";
    } else if (player == "scissors" && compA == "rock") {
        answerString = "You lost! rock beats scissors.";
    } 
    else {
        answerString = "error - inside function winner()."
    }
    return answerString;
}
