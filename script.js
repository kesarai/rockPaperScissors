



function game() {
    let win = 0;
    let lose = 0;
    let draw = 0;
  
    function getComputerChoice() {
      const choices = ["Rock", "Paper", "Scissors"];
      return choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    }
    
    function getPlayerChoice(){

    }

    for (let i = 1; win < 3 && lose < 3; i++) {
      computerChoice = getComputerChoice();
      playerChoice = getPlayerChoice();
      if (computerChoice === playerChoice) {
        result = "It's a tie!";
      } else if (computerChoice === "rock" && playerChoice === "paper") {
        result = "You win!";
      } else if (computerChoice === "rock" && playerChoice === "scissors") {
        result = "You lose!";
      } else if (computerChoice === "paper" && playerChoice === "rock") {
        result = "You lose!";
      } else if (computerChoice === "paper" && playerChoice === "scissors") {
        result = "You win!";
      } else if (computerChoice === "scissors" && playerChoice === "rock") {
        result = "You win!";
      } else if (computerChoice === "scissors" && playerChoice === "paper") {
        result = "You lose!";
      } else {
        result = "Check your spelling!";
      }
  
      alert(result);
  
      if (result === "You win!") {
        ++win;
      } else if (result === "You lose!") {
        ++lose;
      } else {
        ++draw;
      }
    
  
      alert("Player score: " + win + "  ||  PC score: " + lose);
  
      if (win === 3) {
        alert("Congratulations! You defeated the PC.");
      } else if (lose === 3) {
        alert("Defeated! You couldn't handle the PC.");
      }
    }
}
  
  //console.log(game("rock"));