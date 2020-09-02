let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let num = Math.floor(Math.random()*3)
    if(num == 0){
      return "rock"
    } else if(num == 1){
      return "paper"
    } else{
      return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
  const lose = "You lose, "
  const win =  "You win, "
  const paperBeatsRock = "paper beats rock."
  const rockBeatsScissors = "rock beats scissors."
  const scissorsBeatsPaper = "scissors beats paper."

  if(playerSelection == "rock" && computerSelection == "paper"){
    computerScore++;
    return(lose + paperBeatsRock)
  } else if (playerSelection == "rock" && computerSelection == "scissors"){
    playerScore++;
    return(win + rockBeatsScissors)
  } else if(playerSelection == "paper" && computerSelection == "rock"){
    playerScore++;
    return(win + paperBeatsRock)
  } else if(playerSelection == "paper" && computerSelection == "scissors"){
    computerScore++;
    return(lose + scissorsBeatsPaper)
  } else if(playerSelection == "scissors" && computerSelection == "rock"){
    computerScore++;
    return(lose + rockBeatsScissors)
  } else if(playerSelection == "scissors" && computerSelection == "paper"){
    playerScore++;
    return(win + scissorsBeatsPaper)
  }else if (playerSelection == computerSelection) {
    return("tie")
  }
  else{
    return("invalid input")
  }

}

function displayResult(resultString){
  const resultsDiv = document.querySelector('.results');

  let result = document.getElementById("result");

  if(!result){
    //if a result isn't alreay created, create on and
    //add result text
    result = document.createElement("p");
    result.setAttribute("id", "result");
    result.textContent = resultString;
    resultsDiv.appendChild(result);
  }else{
    //if a result is already on screen, just update its
    //text
    result.textContent = resultString;
  }
}

function updateScore(){
  const scoreDiv = document.querySelector('.score');

  let playerScoreP = document.getElementById("playerScore");
  let computerScoreP = document.getElementById("computerScore");

  if(playerScore == 5){
    playerScoreP.textContent = "Player score: " + playerScore;
    let win = document.createElement("p");
    win.textContent = "Congrats you won";
    scoreDiv.appendChild(win);
  }
  else if(!playerScoreP){
    //if a scores arent already created, create them and
    //add score text
    playerScoreP = document.createElement("p");
    computerScoreP = document.createElement("p");
    playerScoreP.setAttribute("id", "playerScore");
    computerScoreP.setAttribute("id", "computerScore");
    playerScoreP.textContent = "Player score: " + playerScore;
    computerScoreP.textContent = "Computer score:" + computerScore;
    scoreDiv.appendChild(playerScoreP);
    scoreDiv.appendChild(computerScoreP);
  }else{
    //if a result is already on screen, just update its
    //text
    playerScoreP.textContent = "Player score: " + playerScore;
    computerScoreP.textContent = "Computer score:" + computerScore;
  }
}

function buttonClick(e){
  let playerSelection = e.target.id;
  let computerSelection = computerPlay();
  let result = playRound(playerSelection,computerSelection);
  displayResult(result);
  updateScore();
}

// buttons is a node list. It looks and acts much like an array.
const buttons = Array.from(document.querySelectorAll('button'));

// we use the .forEach method to iterate through each button
buttons.forEach((button) => button.addEventListener('click', buttonClick));
