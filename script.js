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

function playSingleRound(playerSelection, computerSelection) {
    // console.log(playerSelection);
    // console.log(computerSelection);
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        console.log('It\'s a draw!');
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats Rock');
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        console.log('You win! Rock beats Scissors');
    }

    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        console.log('You win! Paper beats Rock');
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
        console.log('It\'s a draw!');
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        console.log('You lose! Scissors beats Paper');
    }

    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        console.log('You lose! ROck beats Scissors');
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        console.log('You win! Scissors beats paper');
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
        console.log('It\'s a draw!');
    }
}