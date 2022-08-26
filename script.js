let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
const win = 'win';
const lose = 'lose';
const draw = 'draw';

function getComputerChoice() {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
    let random = Math.ceil(Math.random() * 3);
    // console.log(random);
    if (random === 1) {
        return rock;
    }
    else if (random === 2) {
        return paper;
    }
    return scissors;
}

function playRound(playerSelection, computerSelection) {
    // const win = 'win';
    // const lose = 'lose';
    // const draw = 'draw';
    // console.log(playerSelection);
    // console.log(computerSelection);
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        return draw;
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return lose;
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return win;
    }

    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return win;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
        return draw;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        return lose;
    }

    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        return lose;
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return win;
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
        return draw;
    }
}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    console.log('HAJIME!');
    console.log('Player : ' + playerCount);
    console.log('Computer : ' + computerCount);
    console.log('HAJIME!');
    for (let i = 0; i < 5; i++){
        // console.log(i);
        let playerSelection = prompt('What is your choice ?');
        // if (playerSelection !== rock || playerSelection !== paper || playerSelection !== scissors) {
        //     playerSelection = prompt('What is your choice ?');
        //     i--;
        //     console.log(i);
        // }
        let computerSelection = getComputerChoice();
        // console.log('Player : ' + playerCount);
        // console.log('Computer : ' + computerCount);
        if (playRound(playerSelection, computerSelection) === win) {
            playerCount += 1;
            console.log('You win this round!');
            console.log('Player : ' + playerCount);
            console.log('Computer : ' + computerCount);
        }
        else if (playRound(playerSelection, computerSelection) === lose) {
            computerCount += 1;
            console.log('You lose this round!');
            console.log('Player : ' + playerCount);
            console.log('Computer : ' + computerCount);
        }
        else if (playRound(playerSelection, computerSelection) === draw) {
            i--;
            console.log('It\'s a draw!');
            console.log('Player : ' + playerCount);
            console.log('Computer : ' + computerCount);
        }
    }

    if (playerCount > computerCount) {
        alert('You win the BO5');
        // return 'You win the BO5';
    }
    else if (playerCount < computerCount) {
        alert('You lose the BO5');
        // return 'You lose the BO5';
    }
}

game();

// console.log(playRound(paper, getComputerChoice()));



// function playRound(playerSelection, computerSelection) {
//     const win = 'win';
//     const lose = 'lose';
//     const draw = 'draw';
//     // console.log(playerSelection);
//     // console.log(computerSelection);
//     if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
//         return 'It\'s a draw!';
//     }
//     else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
//         return 'You lose! Paper beats Rock';
//     }
//     else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
//         return 'You win! Rock beats Scissors';
//     }

//     else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
//         return 'You win! Paper beats Rock';
//     }
//     else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
//         return 'It\'s a draw!';
//     }
//     else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
//         return 'You lose! Scissors beats Paper';
//     }

//     else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
//         return 'You lose! Rock beats Scissors';
//     }
//     else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
//         return 'You win! Scissors beats Paper';
//     }
//     else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
//         return 'It\'s a draw!';
//     }
// }