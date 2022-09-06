let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
let playerCount = 0;
let computerCount = 0;
const win = 'win';
const lose = 'lose';
const draw = 'draw';
const result = document.querySelector('.result');

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

function testWin(score) {
    if (score === 5) {
        result.textContent = 'You WIN!';
        alert('you WIN !');
    }
}

function testLose(score) {
    if (score === 5) {
        result.textContent = 'You LOSE!';
        alert('you LOSE !');
    }
}

function playRound(playerSelection) {
    // const win = 'win';
    // const lose = 'lose';
    // const draw = 'draw';
    // console.log(playerSelection);
    // console.log(computerSelection);
    // let playerCount = 0;
    // let computerCount = 0;
    computerSelection = getComputerChoice();
    // const result = document.querySelector('.result');
    const counter = document.querySelector('.counter');
    // const key = document.querySelector("playerSelection");
    // const btn = $(this).val();
    // console.log(result);

    if (playerCount === 5 || computerCount === 5) {
        return;
    }

    if (this.value === 'rock' && computerSelection === 'rock') {
        // return draw;
        result.textContent = 'draw';
        counter.textContent = playerCount + ' - ' + computerCount;
        console.log('draw');
    }
    else if (this.value === 'rock' && computerSelection === 'paper') {
        // return lose;
        result.textContent = 'lose';
        computerCount += 1;
        counter.textContent = playerCount + ' - ' + computerCount;
        console.log('lose');
        testLose(computerCount);
    }
    else if (this.value === 'rock' && computerSelection === 'scissors') {
        // return win;
        result.textContent = 'win';
        playerCount += 1;
        counter.textContent = playerCount + ' - ' + computerCount;
        console.log('win');
        testWin(playerCount);
    }

    else if (this.value === 'paper' && computerSelection === 'rock') {
        // return win;
        result.textContent = 'win';
        playerCount += 1;
        counter.textContent = playerCount + ' - ' + computerCount;
        console.log('win');
        testWin(playerCount);
    }
    else if (this.value === 'paper' && computerSelection === 'paper') {
        // return draw;
        result.textContent = 'draw';
        counter.textContent = playerCount + ' - ' + computerCount;
        console.log('draw');
    }
    else if (this.value === 'paper' && computerSelection === 'scissors') {
        // return lose;
        result.textContent = 'lose';
        computerCount += 1;
        counter.textContent = playerCount + ' - ' + computerCount;
        console.log('lose');
        testLose(computerCount);
    }

    else if (this.value === 'scissors' && computerSelection === 'rock') {
        // return lose;
        result.textContent = 'lose';
        computerCount += 1;
        counter.textContent = playerCount + ' - ' + computerCount;
        console.log('lose');
        testLose(computerCount);
    }
    else if (this.value === 'scissors' && computerSelection === 'paper') {
        // return win;
        result.textContent = 'win';
        playerCount += 1;
        counter.textContent = playerCount + ' - ' + computerCount;
        console.log('win');
        testWin(playerCount);
    }
    else if (this.value === 'scissors' && computerSelection === 'scissors') {
        // return draw;
        result.textContent = 'draw';
        counter.textContent = playerCount + ' - ' + computerCount;
        console.log('draw');
    }
}


// function playRound(playerSelection, computerSelection) {
//     // const win = 'win';
//     // const lose = 'lose';
//     // const draw = 'draw';
//     // console.log(playerSelection);
//     // console.log(computerSelection);
//     if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
//         return draw;
//     }
//     else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
//         return lose;
//     }
//     else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
//         return win;
//     }

//     else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
//         return win;
//     }
//     else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
//         return draw;
//     }
//     else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
//         return lose;
//     }

//     else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
//         return lose;
//     }
//     else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
//         return win;
//     }
//     else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
//         return draw;
//     }
// }

function game() {
    let playerCount = 0;
    let computerCount = 0;
    console.log('HAJIME!');
    console.log('Player : ' + playerCount);
    console.log('Computer : ' + computerCount);
    console.log('HAJIME!');
    for (let i = 0; i < 5; i++){
        console.log('i = ' + i);
        if (playerCount === 3) {
            alert('You win the BO5');
            return 'You win the BO5';
        }
        if (computerCount === 3) {
            alert('You lose the BO5');
            return 'You lose the BO5';
        }
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

// game();


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', playRound)
        // alert(button.id);
});
// });




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





// buttons.forEach((button) => {
//     button.addEventListener('click', function playRound(playerSelection) {
//         computerSelection = getComputerChoice();
//         const key = document.getElementById("rps");
//         // const btn = $(this).val();
//         console.log(key.value);
//         if (playerSelection === 'rock' && computerSelection === 'rock') {
//             // return draw;
//             console.log('draw');
//         }
//         else if (playerSelection === 'rock' && computerSelection === 'paper') {
//             // return lose;
//             console.log('lose');
//         }
//         else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//             // return win;
//             console.log('win');
//         }

//         else if (playerSelection === 'paper' && computerSelection === 'rock') {
//             // return win;
//             console.log('win');
//         }
//         else if (playerSelection === 'paper' && computerSelection === 'paper') {
//             // return draw;
//             console.lof('draw');
//         }
//         else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//             // return lose;
//             console.log('lose');
//         }

//         else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//             // return lose;
//             console.log('lose');
//         }
//         else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//             // return win;
//             console.log('win');
//         }
//         else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
//             // return draw;
//             console.lof('draw');
//         }

//     });
//     // alert(button.id);
// });