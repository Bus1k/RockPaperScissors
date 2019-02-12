const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: null,
    computerHand: null
}

const hands = [...document.querySelectorAll(".select img")];
document.querySelector(".start").addEventListener('click', startGame);

//User choice
function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px black';
}

//Computer choice
function computerChoice() {
    const compHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return compHand;
}

//Checking the result
function checkResult(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if ((player === "paper" && computer === "rock") || (player === "rock" && computer === "scissors") || (player === "scissors" && computer === "paper")) {
        return 'win';
    } else {
        return 'loose';
    }
}

//Show result 
function publishResult(player, computer, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="pc-choice"]').textContent = computer;
    // document.querySelector('[data-summary="who-win"]').textContent = result;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = 'YOU ;)';
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
    } else if (result === "loose") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = 'COMPUTER ;(';
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = 'DRAW';
        document.querySelector('[data-summary="who-win"]').style.color = 'black';
    }
}

//Game Start - calling other functions
function startGame() {
    if (!game.playerHand) return alert("Choose a sign!!");

    game.computerHand = computerChoice();
    const gameResult = checkResult(game.playerHand, game.computerHand);
    publishResult(game.playerHand, game.computerHand, gameResult);
}

hands.forEach(hand => hand.addEventListener('click', handSelection));