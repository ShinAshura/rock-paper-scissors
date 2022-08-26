function getComputerChoice() {
    let rock = 'ŕock';
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
