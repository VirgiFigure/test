// Layer 1 (start)
document.getElementById('start-button').addEventListener('click', function() {
    toggleScreens('level-screen');
});

// Data Bab dan stage
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

// Fungsi untuk menampilkan stage setelah Bab dipilih
function showStages(babNumber) {
    const stageContainer = document.getElementById('stageContainer');
    stageContainer.innerHTML = ''; // Kosongkan kontainer sebelumnya

    bab[babNumber].forEach((stage, index) => {
        const stageButton = document.createElement('button');
        stageButton.innerText = stage;
        stageButton.className = 'stageButton'; // Tambahkan kelas untuk styling
        stageButton.addEventListener('click', () => startStage(babNumber, index + 1));
        stageContainer.appendChild(stageButton);
    });
}
    // Tampilkan stageContainer setelah menambahkan tombol stage
    function showStages(babNumber) {
        const stageContainer = document.getElementById('stageContainer');
        stageContainer.innerHTML = ''; // Kosongkan kontainer sebelumnya
    
        bab[babNumber].forEach((stage, index) => {
            const stageButton = document.createElement('button');
            stageButton.innerText = stage;
            stageButton.addEventListener('click', () => startStage(babNumber, index + 1));
            stageContainer.appendChild(stageButton);
        });
    }
    
    // Fungsi untuk memulai stage
    function startStage(babNumber, stage) {
        console.log(`Memulai Bab ${babNumber}, Stage ${stage}`);
        // Tambahkan logika untuk memulai permainan di stage yang dipilih
    }
    
    // Event listener untuk Bab
    document.querySelectorAll('.levelButton').forEach(button => {
        button.addEventListener('click', function() {
            const babNumber = this.getAttribute('data-level');
            showStages(babNumber);
            document.getElementById('levelContainer').style.display = 'none'; // Sembunyikan tombol Bab setelah memilih
        });
    });

// Fungsi untuk mengubah tampilan layar
function toggleScreens(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.style.display = 'none'; // Sembunyikan semua layar
    });
    document.getElementById(screenId).style.display = 'flex'; // Tampilkan layar yang dipilih
}

// game
//ini untuk screen awal
document.getElementById('Stage 1-1').addEventListener('click', function() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'grid'; // Atur tampilan game-container
    // Menambahkan tombol pengumuman
const announcementButton = document.createElement('button');
announcementButton.textContent = 'Pelajari Dahulu!!!';
document.body.appendChild(announcementButton);

// Menangani klik pada tombol pengumuman
announcementButton.addEventListener('click', function() {
    document.getElementById('announcement').style.display = 'block'; // Tampilkan kolom pengumuman
});

// Menangani klik pada tombol tutup di kolom pengumuman
document.getElementById('close-announcement').addEventListener('click', function() {
    document.getElementById('announcement').style.display = 'none'; // Sembunyikan kolom pengumuman
});
});
const cardImages = [
    'あき', // Kartu 1
    '秋',   // Kartu 5
    'はる', // Kartu 2
    '春',   // Kartu 6
    'ふゆ', // Kartu 3
    '冬',   // Kartu 7
    'なつ', // Kartu 4
    '夏'    // Kartu 8
];

// Gandakan setiap nilai untuk membuat pasangan
const pairedCardValues = [...cardImages]; // Hanya 8 kartu

let firstCard, secondCard;
let lockBoard = false;
let score = 0;
let results = []; // Variabel untuk menyimpan hasil pasangan

const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.querySelector('.score');
const resultsDisplay = document.querySelector('.results');
const restartButton = document.getElementById('restart');

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

    // Menggunakan logika if untuk memeriksa pasangan yang benar
    if ((firstValue === 'あき' && secondValue === '秋') || 
        (firstValue === '秋' && secondValue === 'あき')) {
    } else if ((firstValue === 'はる' && secondValue === '春') || 
               (firstValue === '春' && secondValue === 'はる')) {
    } else if ((firstValue === 'ふゆ' && secondValue === '冬') || 
               (firstValue === '冬' && secondValue === 'ふゆ')) {
    } else if ((firstValue === 'なつ' && secondValue === '夏') || 
               (firstValue === '夏' && secondValue === 'なつ')) {
    } else {
        unflipCards();
        return; // Jika tidak cocok, keluar dari fungsi
    }

    disableCards();
    resultsDisplay.innerHTML = results.join('<br>'); // Menampilkan hasil
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

function shuffleCards() {
    pairedCardValues.sort(() => Math.random() - 0.5);
}

function startGame() {
    shuffleCards();
    pairedCardValues.forEach(image => {
        const card = createCard(image);
        gameContainer.appendChild(card);
    });
}

restartButton.addEventListener('click', () => {
    score = 0;
    results = []; // Reset hasil
    scoreDisplay.textContent = `Score: ${score}`;
    resultsDisplay.innerHTML = ''; // Reset tampilan hasil
    gameContainer.innerHTML = '';
    startGame();
});

startGame();