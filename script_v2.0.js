//Variables
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let div = document.createElement('div');
let main = document.getElementById('main');
let reset = document.getElementById('reset') 
div.style.cssText = 'padding: 5px; white-space: pre-line;' 
const rps = ['rock', 'paper', 'scissors'];
let i = 0; let win = 0; let loss = 0; let tie = 0;

//Play 5 times and return winner
function playRound(playerSelection){
     if (i < 5){
          i++;
          let randomNumber = Math.floor(Math.random()*3);
          let computerSelection = rps[randomNumber];
          console.log(computerSelection)         
          
          if ((playerSelection === 'rock' && computerSelection === 'scissors')
          || (playerSelection === 'scissors' && computerSelection === 'paper')
          || (playerSelection === 'paper' && computerSelection === 'rock')){
                    win++
                    div.textContent= 'You win \r\n';
                    div.textContent += `wins: ${win}, loss: ${loss}, tie: ${tie}.`;

          }else if (playerSelection === computerSelection){
                    tie++;
                    div.textContent = 'It\'s a tie \r\n';
                    div.textContent += `wins: ${win}, loss: ${loss}, tie: ${tie}.`;
                    
          }else{
                    loss++;
                    div.textContent = 'You lose \r\n';
                    div.textContent += `wins: ${win}, loss: ${loss}, tie: ${tie}.`;
                    
          }
          main.appendChild(div);     
     }
     else {
          rock.removeEventListener('click', function(){playRound(playerSelection='rock')});
          paper.removeEventListener('click',function(){playRound(playerSelection='paper')});
          scissors.removeEventListener('click',function(){playRound(playerSelection='scissors')});
          if (win > loss){
               div.textContent = `Overall: You win \r\n wins: ${win}, loss: ${loss}, tie: ${tie}.`;
          }else if (win<loss){
               div.textContent = `Overall: You lose \r\n wins: ${win}, loss: ${loss}, tie: ${tie}.`;
          }else{
               div.textContent = `Overall: It's a tie \r\n wins: ${win}, loss: ${loss}, tie: ${tie}.`;
          }
          main.appendChild(div);
     }
}

function startOver(){
     i = 0; win = 0; loss = 0; tie = 0;
     div.textContent = '';
}

//Event Listeners
rock.addEventListener('click', function(){playRound(playerSelection='rock')});
paper.addEventListener('click',function(){playRound(playerSelection='paper')});
scissors.addEventListener('click',function(){playRound(playerSelection='scissors')});
reset.addEventListener('click', function(){startOver()})



