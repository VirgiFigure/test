document.getElementById('start-button').addEventListener('click', function () {
    toggleScreens('level-screen');
});

const bab = {
    1: ['Stage 1-1', 'Stage 1-2', 'Stage 1-3', 'Stage 1-4', 'Stage 1-5', 'Stage 1-6', 'Stage 1-7', 'Stage 1-8'],
    2: ['Stage 2-1', 'Stage 2-2', 'Stage 2-3', 'Stage 2-4', 'Stage 2-5', 'Stage 2-6', 'Stage 2-7', 'Stage 2-8'],
    3: ['Stage 3-1', 'Stage 3-2', 'Stage 3-3', 'Stage 3-4', 'Stage 3-5', 'Stage 3-6', 'Stage 3-7', 'Stage 3-8'],
    4: ['Stage 4-1', 'Stage 4-2', 'Stage 4-3', 'Stage 4-4', 'Stage 4-5', 'Stage 4-6', 'Stage 4-7', 'Stage 4-8'],
    5: ['Stage 5-1', 'Stage 5-2', 'Stage 5-3', 'Stage 5-4', 'Stage 5-5', 'Stage 5-6', 'Stage 5-7', 'Stage 5-8'],
    6: ['Stage 6-1', 'Stage 6-2', 'Stage 6-3', 'Stage 6-4', 'Stage 6-5', 'Stage 6-6', 'Stage 6-7', 'Stage 6-8'],
    7: ['Stage 7-1', 'Stage 7-2', 'Stage 7-3', 'Stage 7-4', 'Stage 7-5', 'Stage 7-6', 'Stage 7-7', 'Stage 7-8'],
    8: ['Stage 8-1', 'Stage 8-2', 'Stage 8-3', 'Stage 8-4', 'Stage 8-5', 'Stage 8-6', 'Stage 8-7', 'Stage 8-8'],
    9: ['Stage 9-1', 'Stage 9-2', 'Stage 9-3', 'Stage 9-4', 'Stage 9-5', 'Stage 9-6', 'Stage 9-7', 'Stage 9-8'],
    10: ['Stage 10-1', 'Stage 10-2', 'Stage 10-3', 'Stage 10-4', 'Stage 10-5', 'Stage 10-6', 'Stage 10-7', 'Stage 10-8'],
};

function showStages(babNumber) {
    const stageContainer = document.getElementById('stageContainer');
    stageContainer.innerHTML = '';

    if (babNumber == 1) {
        startStage(babNumber, 1);
        return;
    }

    bab[babNumber].forEach((stage, index) => {
        const stageButton = document.createElement('button');
        stageButton.innerText = stage;
        stageButton.className = 'stageButton';
        stageButton.addEventListener('click', () => startStage(babNumber, index + 1));
        stageContainer.appendChild(stageButton);
    });
}

function startStage(babNumber, stage) {
    console.log(`Memulai Bab ${babNumber}, Stage ${stage}`);
    initGame();
    toggleScreens('game-container');
    startGame();
}

const cardImages = [
    'あき',
    '秋',
    'はる',
    '春',
    'ふゆ',
    '冬',
    'なつ',
    '夏'
];

let pairedCardValues;
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.querySelector('.score');
const resultsDisplay = document.querySelector('.results');
const restartButton = document.getElementById('restart');

function initGame() {
    pairedCardValues = [...cardImages, ...cardImages];
    shuffleCards();
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    scoreDisplay.style.display = 'block';
    resultsDisplay.style.display = 'none';
    gameContainer.innerHTML = '';
    lockBoard = false;
    [firstCard, secondCard] = [null, null];
}

function shuffleCards() {
    pairedCardValues.sort(() => Math.random() - 0.5);
}

function createCard(cardImage) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = cardImage;
    card.innerText = '';
    card.addEventListener('click', flipCard);
    return card;
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.innerText = this.dataset.name;
    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    const firstValue = firstCard.dataset.name;
    const secondValue = secondCard.dataset.name;

    if (firstValue === secondValue) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.innerText = '';
        secondCard.innerText = '';
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function startGame() {
    pairedCardValues.forEach(image => {
        const card = createCard(image);
        gameContainer.appendChild(card);
    });
    toggleScreens('game-container');
}

restartButton.addEventListener('click', () => {
    alert("Game akan dimulai ulang!");
    initGame();
    startGame();
});

document.querySelectorAll('.levelButton').forEach(button => {
    button.addEventListener('click', function () {
        const babNumber = this.getAttribute('data-level');
        showStages(babNumber);
        if (babNumber == 1) {
            this.style.display = 'none';
        }
    });
});

function toggleScreens(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'flex';
}
