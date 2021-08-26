//ROCK PAPER SCISSORS
//declared global variables needed before functions are called
let compA;
let answerString;
let gamesWon;
let gamesLost;
let userAnswer;
//round function that goes to 5 games.
function game(num = 3) {
 gamesWon = 0;
 gamesLost = 0;
while (gamesLost != num || gamesWon != num) {
    play();
    console.log(` you have won:${gamesWon} computer: ${gamesLost}.
    first to 3 wins.`);
    if (gamesLost == 3 || gamesWon == 3) {
        stop;
    };}
}
function winOrLose() {

}
/*run. function that starts the game, and declares a winner.
^prompt for answer
^return of computed result.
^ two inputs needed: playerSelection and Computer Selection */

function play() {
    let playerarg = playerAnswer();
    let computerarg = computerAnswer();
    console.log(winner(userAnswer,computerAnswer()));
}

// ask player for their answer, and make it into a consistent, confirmed value.
function playerAnswer() {
    answer = prompt("Rock,paper or scissors?");
    userAnswer = answer.toLowerCase();
    return userAnswer;
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
        ++gamesWon;
    } else if (player == "paper" && compA == "scissors") {
        answerString = "You lost! scissors cut paper.";
        ++gamesLost;
    } else if (player == "scissors" && compA == "paper") {
        answerString = "You won! scissors cut paper.";
        ++gamesWon;
    } else if (player == "rock" && compA == "paper") {
        answerString = "You lost! Paper wraps rock.";
        ++gamesLost;
    } else if (player == "paper" && compA == "rock") {
        answerString = "You won! paper wrap's rock.";
        ++gamesWon;
    } else if (player == "scissors" && compA == "rock") {
        answerString = "You lost! rock beats scissors.";
        ++gamesLost;
    }   else {
        answerString = "error - inside function winner()."
    }
    return answerString;
}
