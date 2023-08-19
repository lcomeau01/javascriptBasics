
let computerChoice;  
let playerChoice; 

function getComputerChoice() {
  let choiceMade = Math.floor(Math.random() * 3) + 1; 
  if(choiceMade == 1) computerChoice = "rock"; 
  else if(choiceMade == 2) computerChoice = "paper";
  else computerChoice = "scissors"; 
  console.log("Computer choice: " + computerChoice); 
}

function getUserChoice() { 
  let playerAnswer = prompt("What is your choice?"); 
  if(playerAnswer == "rock" || playerAnswer == "Rock"
  || playerAnswer == "paper" || playerAnswer == "Paper"
  || playerAnswer == "scissors" || playerAnswer == "Scissors") {
  console.log("Player's Choice: " + playerAnswer); 
  }
  else getUserChoice(); 
}

getComputerChoice(); 
getUserChoice(); 