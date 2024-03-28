const gameoverTracks = [
    './music/gameover.mp3',
    './music/gameover-music.mp3'
];

const gamemusic = new Audio('./music/game-music.mp3');
const clash = new Audio('./music/clash.mp3');
const jump = new Audio('./music/jump.mp3');

let defender = document.getElementById('defender');
let attacker = document.getElementById('attacker');
let score = document.getElementById('score');
let gameOver = document.querySelector('.gm-container');

let currentIndex = 0;
let scoreCount = 0;
let cross = true;

gamemusic.play();

function playGameOverTrack() {
    if (currentIndex < gameoverTracks.length) {
        const audio = new Audio(gameoverTracks[currentIndex]);
        audio.onended = () => {
            currentIndex++;
            playGameOverTrack();
        };
        audio.play();
    } else {
        currentIndex = 0;
    }
}

document.onkeydown = function (e) {
    let defenderX = parseInt(window.getComputedStyle(defender, null).getPropertyValue('left'));
    switch (e.key) {
        case "ArrowUp":
            defender.classList.add('animate-defender');
            setTimeout(() => {
                defender.classList.remove('animate-defender');
            }, 600);
            break;
        case "ArrowRight":
            defender.style.left = defenderX + 150 + "px";
            break;
        case "ArrowLeft":
            defender.style.left = defenderX - 150 + "px";
            break;
    }
}

setInterval(() => {

    DX = parseInt(window.getComputedStyle(defender, null).getPropertyValue('left'));
    DY = parseInt(window.getComputedStyle(defender, null).getPropertyValue('top'));
    AX = parseInt(window.getComputedStyle(attacker, null).getPropertyValue('left'));
    AY = parseInt(window.getComputedStyle(attacker, null).getPropertyValue('top'));

    distanceX = Math.abs(DX - AX);
    distanceY = Math.abs(DY - AY);

    if (distanceX < 70 && distanceY < 54) {
        gameOver.style.visibility = 'visible';
        attacker.classList.remove('animate-attacker');
        gamemusic.pause();
        clash.play();
        playGameOverTrack();

    } else if (distanceX < 145 && cross) {
        scoreCount += 1;
        updateScore(scoreCount);
        jump.play();
        cross = false;

        setTimeout(() => {
            cross = true;
        }, 600);

        setTimeout(() => {
            animationDuration = parseFloat(window.getComputedStyle(attacker, null).getPropertyValue('animation-duration'));
            attacker.style.animationDuration = (animationDuration - 0.1) + 's';
        }, 2000);

    }

    function updateScore(scoreCount) {
        score.innerHTML = "Your Score: " + scoreCount;
    }

}, 10);
