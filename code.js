    // Your JavaScript goes here!

    const scoreText = document.querySelector(`p[data-text="score-text"]`);
    const resultText = document.querySelector(`p[data-text="match-result-text"]`);

    let humanScore = Number.prototype;
    let aiScore = Number.prototype;

    humanScore = aiScore = 0;
    
    updateScore();
    resultText.classList.add('hidden');

    function updateScore(){
        scoreText.textContent = `Human: ${humanScore} - AI: ${aiScore}`;
    }

    function getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPlay(){
        let number = getRandomInt(3);
        switch(number){
            case 0: return 'rock';
            case 1: return 'paper';
            case 2: return 'scissors';
        }
    }

    function playRound(playerSelection,computerSelection){

        let fixedPlayerSelection = playerSelection.toLowerCase();

        if(fixedPlayerSelection == 'rock' && computerSelection == 'scissors' || 
        fixedPlayerSelection == 'paper' && computerSelection == 'rock' || 
        fixedPlayerSelection == 'scissors' && computerSelection == 'paper'){
            return `1.- you win, ${fixedPlayerSelection} wins to ${computerSelection}`;
        }

        if(fixedPlayerSelection == 'scissors' && computerSelection == 'rock' || 
        fixedPlayerSelection == 'rock' && computerSelection == 'paper' || 
        fixedPlayerSelection == 'paper' && computerSelection == 'scissors'){
            return `2.- I win, ${computerSelection} wins to ${fixedPlayerSelection}`;
        }

        if(fixedPlayerSelection == computerSelection){
            return "3.- it's a draw";
        }
    }

    function game()
    {
        let playerScore = 0;
        let machineScore = 0;

        for(let i = 0; i < 5; i++)
        {
        let playerSelection = prompt('enter your selection');
        let computerSelection = computerPlay();
        let result = playRound(playerSelection,computerSelection);
        console.log(result)
        
        let number = parseInt(result.charAt(0),10);
        
        switch(number)
        {
            case 1: playerScore += 1; break;
            case 2: machineScore +=1; break;
        }
        console.log(`score: player - ${playerScore}, machine - ${machineScore}`);
        }

        if(playerScore > machineScore){
            console.log("human wins!!!")
        }
        if(machineScore > playerScore){
            console.log("Rise of the machines!!!");
        }
        if(machineScore == playerScore){
            console.log("it's a draw GG");
        }
    }

    //game();