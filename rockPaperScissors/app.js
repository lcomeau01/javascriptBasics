
playGame(); 

function playGame() { 
  let winCounts = 0; 
  let lossCounts = 0; 
  let tieCounts = 0; 

  for (let i = 0; i < 5; i++)
  { 
    let playerChoice = getUserChoice();
    let computerChoice = getComputerChoice(); 
    if(playerChoice === computerChoice) { 
      ++tieCounts; 
      console.log("You tied!"); 
    }
    else { 
      let winBool = roundPlayed(playerChoice, computerChoice); 
      if (winBool == true) { 
        ++winCounts; 
        console.log("You win " + playerChoice + " beats " + computerChoice); 
      }
      else { 
        ++lossCounts; 
        console.log("You lose " + computerChoice + " beats " + playerChoice); 
      }
    }
  }

  if (winCounts > lossCounts) console.log("YOU WIN!"); 
  else if (winCounts < lossCounts) console.log("YOU LOSE!"); 
  else if ((winCounts == lossCounts) && tieCounts > 0) console.log("YOU TIED"); 
}

function getComputerChoice() {
  let computerChoice; 
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
  if (playerChoice == "rock" || playerChoice == "paper" 
                             || playerChoice == "scissors")
  { 
    return playerChoice; 
  }
  else getUserChoice(); 
}

function roundPlayed(playerChoice, computerChoice) { 
  let playerWins = false; 
  if (playerChoice == "rock" && computerChoice == "paper") playerWins = false; 
  else if (playerChoice == "rock" && computerChoice == "scissors") playerWins = true; 
  else if (playerChoice == "paper" && computerChoice == "scissors") playerWins = false; 
  else if (playerChoice == "paper" && computerChoice == "rock") playerWins = true; 
  else if (playerChoice == "scissors" && computerChoice == "rock") playerWins = false; 
  else if (playerChoice == "scissors" && computerChoice == "paper") playerWins = true; 

  return playerWins; 
}


