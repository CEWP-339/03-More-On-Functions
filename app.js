const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';

const getPlayerChoice = function () {
    const selection = prompt(`Please enter your selection: ${ROCK}, ${PAPER}, ${SCISSORS}`, '');
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid Choice! We choose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

startGameBtn.addEventListener('click', function () {
    console.log('Game is starting....');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});