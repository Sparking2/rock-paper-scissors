    // Your JavaScript goes here!

    const scoreText = document.querySelector(`p[data-text="score-text"]`);
    const resultText = document.querySelector(`p[data-text="match-result-text"]`);

    let humanScore = Number.prototype;
    let aiScore = Number.prototype;

    humanScore = aiScore = 0;
    
    //General

    updateScore();
    resultText.classList.add('hidden');

    function updateScore()
    {
        scoreText.textContent = `Human: ${humanScore} - AI: ${aiScore}`;
    }

    function checkGame()
    {
        if(humanScore == 5 && aiScore <= 4)
        {
            resultText.classList.remove('hidden');
            resultText.textContent = "YOU WIN, REFRESH THE PAGE TO PLAY AGAIN!";
            disableButtons();
        }
        if(aiScore == 5 && humanScore <= 4)
        {
            resultText.classList.remove('hidden');
            resultText.textContent = "I WIN, REFRESH THE PAGE TO PLAY AGAIN!";
            disableButtons();
        }
    }

    function disableButtons()
    {
        selection.forEach(selection => selection.disabled = true);
    }


    function round(player,ai)
    {
        
        //Player win
        if(player == 'rock' && ai == 'scissors' || player == 'paper' && ai == 'rock' || player == 'scissors' && ai == 'paper')
        {
            humanScore = humanScore += 1;
            resultText.classList.remove('hidden');
            resultText.textContent = "YOU WIN THIS TIME!!";
        }

        //AI win
        if(player == 'scissors' && ai == 'rock' || player == 'rock' && ai == 'paper' || player == 'paper' && ai == 'scissors')
        {
            aiScore = aiScore += 1;
            resultText.classList.remove('hidden');
            resultText.textContent = "I WIN THIS TIME!!";
        }

        //Draw
        if(player == ai)
        {
            resultText.classList.remove('hidden');
            resultText.textContent = "NO ONE WIN'S THIS TIME";
        }
        updateScore();
        checkGame();
    }

    //Player

    function playGame()
    {
        let playerSelection = this.dataset.selection;
        let computerSelection = computerPlay();
        round(playerSelection,computerSelection);
    }

    //AI

    function getRandomInt(max)
    {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPlay()
    {
        let number = getRandomInt(3);
        switch(number)
        {
            case 0: return 'rock';
            case 1: return 'paper';
            case 2: return 'scissors';
        }
    }


    //OTHERS

    const selection = document.querySelectorAll('.game-button');

    selection.forEach(selection => selection.onclick = playGame);