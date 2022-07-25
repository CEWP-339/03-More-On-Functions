const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

const getPlayerChoice = () => {
    const selection = prompt(`Please enter your selection: ${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid Choice! We choose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = (pChoice, cChoice) => {
    if (pChoice === cChoice) {
        return RESULT_DRAW;
    } else if (pChoice === SCISSORS && cChoice === ROCK ||
               pChoice === PAPER && cChoice === SCISSORS ||
               pChoice === ROCK && cChoice === PAPER) {
        return RESULT_COMPUTER_WINS;
    } else {
        return RESULT_PLAYER_WINS;
    }
}

startGameBtn.addEventListener('click', () => {
    console.log('Game is starting....');
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = getWinner(playerSelection, computerSelection);
    let message = `You picked ${playerSelection}, computer picked ${computerSelection}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw!';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won!';
    } else {
        message = message + 'lost!';
    }
    alert(message);
});

