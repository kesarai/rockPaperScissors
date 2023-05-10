let win = 0;
let lose = 0;
let draw = 0;
result = '';
    
function oneRound(playerChoice){
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
  document.getElementById("result").textContent = result;
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)].toLowerCase()
}
function disableButtons() {
  let buttons = document.getElementsByClassName('btn');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}
function enableButtons() {
  let buttons = document.getElementsByClassName('btn');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
}

function resetGame() {
  win = 0;
  lose = 0;
  draw = 0;
  result = '';
  alert('Game reset');
  document.getElementById("win").textContent = win;
  document.getElementById("lose").textContent = lose;
  document.getElementById("result").textContent = '';
  document.getElementById("finalResult").textContent = '';
  enableButtons();
}


function playGame(){
  let playerChoice = '';
  let buttons = document.getElementsByClassName('btn');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
      playerChoice = e.target.textContent.toLowerCase();
      oneRound(playerChoice);
      if (result === "You win!") {
        ++win;
        document.getElementById("win").textContent = win;
        document.getElementById("lose").textContent = lose;
      } else if (result === "You lose!") {
        ++lose;
        document.getElementById("win").textContent = win;
        document.getElementById("lose").textContent = lose;
      } else {
        ++draw;
        document.getElementById("win").textContent = win;
        document.getElementById("lose").textContent = lose;
      }
      if (win === 5) {
        disableButtons();
        document.getElementById("finalResult").textContent = "Congratulations! You defeated the PC.";
        setTimeout(() => { resetGame(); }, 3000);
      } else if (lose === 5) {
        disableButtons();
        document.getElementById("finalResult").textContent = "Defeated! You couldn't handle the PC.";
        setTimeout(() => { resetGame(); }, 3000);
      }
    });
  }
}

playGame();
     
  
      

    
      
      
  

     

