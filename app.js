const game = () => { //function to play the game
    let pScore = 0; //player score starts zero
    let cScore = 0; //computer score starts zero

    //start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button'); //get the button inside the 'intro' class 
        const introScreen = document.querySelector('.intro');  // get the intro screen (whole page)
        const match = document.querySelector('.match'); // get the match screen

        playBtn.addEventListener('click', () => { //listener to Lets Play button
            introScreen.classList.add("fadeOut"); //when clicked, will add the div with fadeOut class to the intro screen (already has a intro class)
            match.classList.add("fadeIn") //will add the class fadeIn to div with class match (overriding fadeOut)
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button'); //get all the buttons inside the div with class options
        const playerHand = document.querySelector('.player-hand'); //get the img by player-hand class
        const computerHand = document.querySelector('.computer-hand'); //get the img by computer-hand class
        const hands = document.querySelectorAll('.hands img'); //

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })
        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random() * 3); //computer choice
                const computerChoice = computerOptions[computerNumber]; 
                
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);

                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000)

                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner'); //update text
        if (playerChoice === computerChoice) { //checking for a tie
            winner.textContent = 'It is a tie!'
            return;
        }
        if(playerChoice === 'rock') { //check for Rock
            if(computerChoice === 'scissors') {
                winner.textContent = 'Players Wins!'
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins!'
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'paper') { //check for Paper
            if(computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins!'
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Players Wins!'
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'scissors') { //check for Scissors
            if(computerChoice === 'rock') {
                winner.textContent = 'Computer Wins!'
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Players Wins!'
                pScore++;
                updateScore();
                return;
            }
        }
    }

    //call the inner functions
    startGame();
    playMatch();
};

//start the game function
game();