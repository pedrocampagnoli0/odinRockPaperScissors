
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    // 1 = rock
    // 2 = paper
    // 3 = scissors
    return random;
}

function playerSelection(string) {

    string.toLowerCase();

    if(string === "rock") {
        return 1;
    }
    else if(string === "paper") {
        return 2;
    }
    else if (string === "scissors") {
        return 3;
    }
}

function computerSelection() {
    let number = getComputerChoice();

    if(number == 1) {
        return 1;
    }
    else if (number == 2) {
        return 2;
    }
    else if (number == 3) {
        return 3;
    }
}

function playRound(playerSelection, computerSelection) {
    if( playerSelection == 1 && computerSelection == 1) {
        return 1;
    }
    else if ( playerSelection == 1 && computerSelection == 2) {
        return 2;
    }
    else if ( playerSelection == 1 && computerSelection == 3) {
        return 3;
    }
    else if ( playerSelection == 2 && computerSelection == 1) {
        return 4;
    }
    else if ( playerSelection == 2 && computerSelection == 2) {
        return 5;
    }
    else if ( playerSelection == 2 && computerSelection == 3) {
        return 6;
    }
    else if ( playerSelection == 3 && computerSelection == 1) {
        return 7;
    }
    else if ( playerSelection == 3 && computerSelection == 2) {
        return 8;
    }
    else if ( playerSelection == 3 && computerSelection == 3) {
        return 9;
    }
}

function printRound(number) {
    if( number == 1 ) {
        console.log( "Itza Tie! Rock tie with Rock...");
    }
    else if ( number == 2 ) {
        console.log("You Lose! Rock loses to Paper");
    }
    else if ( number == 3 ) {
        console.log("You Win! Rock beats Paper");
    }
    else if ( number == 4 ) {
        console.log("You Win! Paper beats Rock");
    }
    else if ( number == 5 ) {
        console.log("Itza Tie! Paper tie with Paper...");
    }
    else if ( number == 6 ) {
        console.log("You Lose! Paper loses to Scissors");
    }
    else if ( number == 7 ) {
        console.log("You Lose! Scissors loses to  Rock");
    }
    else if ( number == 8 ) {
        console.log("You Win! Scissors beats Paper");
    }
    else if ( number == 9 ) {
        console.log("Itza Tie! Scissors tie with Scissors...");
    }
}

function getRoundResult(number) {
    if( number == 1 ) {
        return 1;
    }
    else if ( number == 2 ) {
        return 2;
    }
    else if ( number == 3 ) {
        return 3;
    }
    else if ( number == 4 ) {
        return 3;
    }
    else if ( number == 5 ) {
        return 1;
    }
    else if ( number == 6 ) {
        return 2;
    }
    else if ( number == 7 ) {
        return 2;
    }
    else if ( number == 8 ) {
        return 3;
    }
    else if ( number == 9 ) {
        return 1;
    }
}

function getUserInput() {
    let play;

    play = prompt("Enter a play: (rock, paper, scissors) ");

    return play;
}

function game() {
    let rounds = prompt("Enter how many rounds you want to play: ");
    let winningRounds = 0;
    let loosingRounds = 0;
    let tieRounds = 0;
    let roundResultFromPlayRound;
    let roundResult;
    let userInput;


    for(let i = 0; i < rounds; i++) {
        userInput = getUserInput();
        roundResultFromPlayRound = playRound(playerSelection(userInput), computerSelection());
        printRound(roundResultFromPlayRound);

        roundResult = getRoundResult(roundResultFromPlayRound);
        if(roundResult == 1) {
            tieRounds++;
        }
        else if (roundResult == 2) {
            loosingRounds++;
        }
        else if (roundResult == 3) {
            winningRounds++;
        }

    }

    console.log("You tied" + tieRounds + "rounds.");
    console.log("You lost" + loosingRounds + "rounds.");
    console.log("You won" + winningRounds + "rounds.");

}

game();
