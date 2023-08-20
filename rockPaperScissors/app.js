let winCounts = 0; 
let lossCounts = 0; 
let tieCounts = 0;
 
 playGame(); 

function playGame() { 
  
  while (winCounts != 5 && lossCounts != 5)
  { 
    let playerChoice = getUserChoice();
    let computerChoice = getComputerChoice(); 
    let score = roundPlayed(playerChoice, computerChoice); 
    console.log(score);  
  }
  if (winCounts == 5) console.log("YOU WIN!"); 
  else console.log("YOU LOSE!"); 
  reset(); 
}

function getComputerChoice() {
  let choiceMade = Math.floor(Math.random() * 3) + 1; 
  if(choiceMade == 1) computerChoice = "rock"; 
  else if(choiceMade == 2) computerChoice = "paper";
  else computerChoice = "scissors"; 
  return computerChoice; 
}

function getUserChoice() { 
  playerChoice = prompt("What is your choice?"); 
  playerChoice = playerChoice.toLowerCase(); 
  playerChoice = playerChoice.trim(); 
  if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors")
  { 
    return playerChoice; 
  }
  else getUserChoice(); 
}

function roundPlayed(playerChoice, computerChoice) { 
  let playerWins = false; 

  if(playerChoice === computerChoice) { 
    ++tieCounts; 
    return "You tied!"; 
  }
  else if (playerChoice == "rock" && computerChoice == "paper") playerWins = false; 
  else if (playerChoice == "rock" && computerChoice == "scissors") playerWins = true; 
  else if (playerChoice == "paper" && computerChoice == "scissors") playerWins = false; 
  else if (playerChoice == "paper" && computerChoice == "rock") playerWins = true; 
  else if (playerChoice == "scissors" && computerChoice == "rock") playerWins = false; 
  else if (playerChoice == "scissors" && computerChoice == "paper") playerWins = true; 

  if (playerWins == true) { 
    ++winCounts; 
    return "You win " + playerChoice + " beats " + computerChoice;
  }
  else if (playerWins == false) { 
    ++lossCounts; 
    return "You lose " + computerChoice + " beats " + playerChoice;
  }
}


