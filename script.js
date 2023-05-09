function playGame(playerChoice){
  let result = '';
  let computerChoice = getComputerChoice();
  console.log(playerChoice);
  console.log(computerChoice);

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
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)].toLowerCase();
  
}


function getPlayerChoice(){
  let playerChoice = '';
  let buttons = document.getElementsByClassName('btn');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
      playerChoice = e.target.textContent.toLowerCase();
      playGame(playerChoice); 
      ;
    })
  }
}



getPlayerChoice();
      
  
      

    
      
      
  

     

