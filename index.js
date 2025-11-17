function getComputerChoice(){
  const number = Math.floor(Math.random() * 3);
  if (number === 0){
   return "rock";
  } else if (number === 1) {
   return "paper";
  } else (number=== 2) 
   return "scissors";
   {
 }
}

function getHumanChoice(){
    let choice=prompt("rock, paper, scissors ?");
    return choice.toLowerCase();
}
 

function playGame(){
   let humanScore=0;
   let computerScore=0;

function playRound(humanChoice, computerChoice){
 if (humanChoice===computerChoice) {
  return "It's a tie!"; 
 } else if(
   (humanChoice==="rock" && computerChoice==="scissors") ||
   (humanChoice==="paper" && computerChoice==="rock") ||
   (humanChoice==="scissors" && computerChoice==="paper")
 ){
   humanScore++;
   return "Congrats,you win!";
 } else {
   computerScore++;
   return "Computer wins!";
 }
}

let humanChoice1 = prompt("Round 1: Choose rock, paper, or scissors.");
   let computerChoice1 = getComputerChoice();
   console.log(`You chose: ${humanChoice1}`);
   console.log(`Computer chose: ${computerChoice1}`);
   console.log(playRound(humanChoice1, computerChoice1));
   console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);

   let humanChoice2 = prompt("Round 2: Choose rock, paper, or scissors.");
   let computerChoice2 = getComputerChoice();
   console.log(`You chose: ${humanChoice2}`);
   console.log(`Computer chose: ${computerChoice2}`);
   console.log(playRound(humanChoice2, computerChoice2));
   console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);


   let humanChoice3 = prompt("Round 3: Choose rock, paper, or scissors.");
   let computerChoice3 = getComputerChoice();
   console.log(`You chose: ${humanChoice3}`);
   console.log(`Computer chose: ${computerChoice3}`);
   console.log(playRound(humanChoice3, computerChoice3));
   console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);

   
   let humanChoice4 = prompt("Round 4: Choose rock, paper, or scissors.");
   let computerChoice4 = getComputerChoice();
   console.log(`You chose: ${humanChoice4}`);
   console.log(`Computer chose: ${computerChoice4}`);
   console.log(playRound(humanChoice4, computerChoice4));
   console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);

   
   let humanChoice5 = prompt("Round 5: Choose rock, paper, or scissors.");
   let computerChoice5 = getComputerChoice();
   console.log(`You chose: ${humanChoice5}`);
   console.log(`Computer chose: ${computerChoice5}`);
   console.log(playRound(humanChoice5, computerChoice5));
   console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();


 