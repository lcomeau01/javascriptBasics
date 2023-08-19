
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
  console.log("Computer choice: " + computerChoice); 
}

function getUserChoice() { 
  playerChoice = prompt("What is your choice?"); 
  playerChoice.toLowerCase(); 
  playerChoice.trim(); 
  if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors")
  { 
    console.log("Player's Choice: " + playerChoice); 
  }
  else getUserChoice(); 
}

function whoWins() { 
  if(playerChoice === computerChoice) tie = true; 
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
    let finalMessage = keepScore();
    console.log("Win Count: " + winCounts); 
    console.log("Loss Count: " + lossCounts); 
    console.log("Tie Count: " + tieCounts); 
    console.log(finalMessage);  
    reset(); 
  }
  if (winCounts == 5) console.log("YOU WIN!"); 
  else console.log("YOU LOSE!"); 
  reset(); 
}
