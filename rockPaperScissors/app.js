
let computerChoice; 
let playerChoice;  
let playerWins = false; 
let computerWins = false; 
let tie = false; 
let winCounts = 0; 
let lossCounts = 0; 
let tieCounts = 0; 

playGame(); 

function getComputerChoice() {
  let choiceMade = Math.floor(Math.random() * 3) + 1; 
  if(choiceMade == 1) computerChoice = "rock"; 
  else if(choiceMade == 2) computerChoice = "paper";
  else computerChoice = "scissors"; 
}

function getUserChoice() { 
  playerChoice = prompt("What is your choice?"); 
  playerChoice = playerChoice.toLowerCase(); 
  playerChoice = playerChoice.trim(); 
  if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors")
  { 
    return; 
  }
  else getUserChoice(); 
}

function whoWins() { 
  if(playerChoice === computerChoice) tie = true; 
  else if (playerChoice == "rock" && computerChoice == "paper") computerWins = true; 
  else if (playerChoice == "rock" && computerChoice == "scissors") playerWins = true; 
  else if (playerChoice == "paper" && computerChoice == "scissors") computerWins = true; 
  else if (playerChoice == "paper" && computerChoice == "rock") playerWins = true; 
  else if (playerChoice == "scissors" && computerChoice == "rock") computerWins = true; 
  else if (playerChoice == "scissors" && computerChoice == "paper") playerWins = true; 
}

function keepScore() { 
  if (computerWins == true) { 
    ++lossCounts; 
    return "You lose " + computerChoice + " beats " + playerChoice; 
  }
  else if (playerWins == true) { 
    ++winCounts; 
    return "You win " + playerChoice + " beats " + computerChoice; 
  }
  else if (tie == true) { 
    ++tieCounts; 
    return "You tied!"; 
  }
}

function reset() { 
  computerWins = false; 
  playerWins = false; 
  tie = false; 
}

function playGame() { 
  while (winCounts != 5 && lossCounts != 5)
  { 
    getUserChoice();
    getComputerChoice(); 
    whoWins(); 
    console.log(keepScore());  
    reset(); 
  }
  if (winCounts == 5) console.log("YOU WIN!"); 
  else console.log("YOU LOSE!"); 
  reset(); 
}
