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

//User choice function
function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px black';
}

//Computer choice
function computerChoice() {
    const compHand = hands[Math.floor(Math.random() * 3)];
    return compHand;
}

//Game Start
function startGame() {
    if (!game.playerHand) return alert("Choose a sign!!");

    game.computerHand = computerChoice();
}

hands.forEach(hand => hand.addEventListener('click', handSelection));