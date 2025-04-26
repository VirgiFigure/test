// Layer 1 (start)
document.getElementById('start-button').addEventListener('click', function() {
    toggleScreens('level-screen');
});

// Data Bab dan stage
const bab = {
    1: ['ステージ 1-1', 'ステージ 1-2', 'ステージ 1-3', 'ステージ 1-4', 'ステージ 1-5', 'ステージ 1-6', 'ステージ 1-7', 'ステージ 1-8'],
    2: ['ステージ 2-1', 'ステージ 2-2', 'ステージ 2-3', 'ステージ 2-4', 'ステージ 2-5', 'ステージ 2-6', 'ステージ 2-7', 'ステージ 2-8'],
    3: ['ステージ 3-1', 'ステージ 3-2', 'ステージ 3-3', 'ステージ 3-4', 'ステージ 3-5', 'ステージ 3-6', 'ステージ 3-7', 'ステージ 3-8'],
    4: ['ステージ 4-1', 'ステージ 4-2', 'ステージ 4-3', 'ステージ 4-4', 'ステージ 4-5', 'ステージ 4-6', 'ステージ 4-7', 'ステージ 4-8'],
    5: ['ステージ 5-1', 'ステージ 5-2', 'ステージ 5-3', 'ステージ 5-4', 'ステージ 5-5', 'ステージ 5-6', 'ステージ 5-7', 'ステージ 5-8'],
    6: ['ステージ 6-1', 'ステージ 6-2', 'ステージ 6-3', 'ステージ 6-4', 'ステージ 6-5', 'ステージ 6-6', 'ステージ 6-7', 'ステージ 6-8'],
    7: ['ステージ 7-1', 'ステージ 7-2', 'ステージ 7-3', 'ステージ 7-4', 'ステージ 7-5', 'ステージ 7-6', 'ステージ 7-7', 'ステージ 7-8'],
    8: ['ステージ 8-1', 'ステージ 8-2', 'ステージ 8-3', 'ステージ 8-4', 'ステージ 8-5', 'ステージ 8-6', 'ステージ 8-7', 'ステージ 8-8'],
    9: ['ステージ 9-1', 'ステージ 9-2', 'ステージ 9-3', 'ステージ 9-4', 'ステージ 9-5', 'ステージ 9-6', 'ステージ 9-7', 'ステージ 9-8'],
    10: ['ステージ 10-1', 'ステージ 10-2', 'ステージ 10-3', 'ステージ 10-4', 'ステージ 10-5', 'ステージ 10-6', 'ステージ 10-7', 'ステージ 10-8'],
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

// game 1-1
// Variabel untuk mengontrol status pengumuman
let isAnnouncementOpen = false; // Tambahkan ini di bagian atas
//ini untuk screen awal
document.getElementById('stageContainer').addEventListener('click', function() {
    document.getElementById('level-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'grid'; // Atur tampilan game-container
    // Menambahkan tombol pengumuman
const announcementButton = document.createElement('button');
announcementButton.textContent = 'Pelajari Dahulu!!!';
document.body.appendChild(announcementButton);

// Menangani klik pada tombol pengumuman
announcementButton.addEventListener('click', function() {
    isAnnouncementOpen = true; // Set status pengumuman terbuka
    document.getElementById('announcement').style.display = 'block'; // Tampilkan kolom pengumuman
});

// Menangani klik pada tombol tutup di kolom pengumuman
document.getElementById('close-announcement').addEventListener('click', function() {
    isAnnouncementOpen = false; // Set status pengumuman tertutup
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
    if (lockBoard || isAnnouncementOpen) return; // Cek apakah pengumuman terbuka
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
