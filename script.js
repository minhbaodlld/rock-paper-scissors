const rps = ['rock', 'paper', 'scissors'];
        
        //let playerSelection = prompt('Choose rock, paper or scissors').toLowerCase();
        
        /* Extra check if prompt is empty or != rps
        if (playerSelection === '' || playerSelection != ){
            playerSelection = prompt('Please type rock paper or scissor in text box below')
        }else if (playerSelection != rps)
        */
        
        //choose random elemeent from rps array
        function computerPlay(){
            let randomNumber = Math.floor(Math.random()*3);
            let computerSelection = rps[randomNumber];
            return computerSelection;
        }
        
        win = 0
        lose = 0
        tie = 0


        //check player choice vs computer
        function single(playerSelection, computerSelection){
           if ((playerSelection === 'rock' && computerSelection === 'scissors')
           || (playerSelection === 'scissors' && computerSelection === 'paper')
           || (playerSelection === 'paper' && computerSelection === 'rock')){
                win++
                return 'You win';
           }else if 
           (playerSelection === computerSelection){
                tie++
                return "It's a tie";
           }else{
                lose++
                return "You lose";
           }   
        }
        
        //loop game 5 times
        function game(){
            for (let i = 0; i < 5; i++ ){
                let randomNumber = Math.floor(Math.random()*3);
                let computerSelection = rps[randomNumber];
                playerSelection = prompt('Choose rock, paper or scissors').toLowerCase();
                if (playerSelection === computerSelection ){
                    tie ++
                    return 'it\'s a tie';
                }
            console.log(`Result: win ${win}, lost ${lose}, tie ${tie}`)
        }}   
    //game function is too long, too many if else statement.
    //curious about how to nest if else into one
    
    
    
    //Rock, paper, scissor without if esle, stuck can't get single function to work
    //Need to work on function return multiple values
        /*Matrix solution for rock paper scissor
        column has to be player why???
        row for computer random*/
        
    /*    const resultMatrix = [
            ['t', 'c', 'u'],
            ['u', 't', 'c'],
            ['c', 'u', 't']
        ];
        const resultMap = {
            't': "it's a tie",
            'u': 'You win',
            'c': 'You lose'
            };    
        
        const rps = ['rock', 'paper', 'scissors'];
        let playerSelection = prompt('Choose rock, paper or scissors').toLowerCase();
        let playerIndex = rps.indexOf(playerSelection);
        
        function computerTurn(){
            let randomNumber = Math.floor(Math.random()*3);
            let computerSelection = rps[randomNumber];
            let computerIndex = rps.indexOf(computerSelection)
            return computerIndex, computerSelection;
        }

        function single(playerIndex, computerIndex, computerSelection){
            userResult = resultMatrix[[playerIndex][computerIndex]]
            result = `Your choice is ${playerSelection}, the computer choice is ${computerSelection}`
            return userResult;
        }


        console.log(`Your choice is ${playerSelection}, the computer's choice is ${computerSelection}.`)
        console.log('The result is in: ' + resultMap[userResult] )
    */