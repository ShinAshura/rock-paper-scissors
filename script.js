let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

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
    const win = 'win';
    const lose = 'lose';
    const draw = 'draw';
    // console.log(playerSelection);
    // console.log(computerSelection);
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        return 'It\'s a draw!';
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock';
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors';
    }

    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock';
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
        return 'It\'s a draw!';
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper';
    }

    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors';
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper';
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
        return 'It\'s a draw!';
    }
}

// console.log(playRound(paper, getComputerChoice()));