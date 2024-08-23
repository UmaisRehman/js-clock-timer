let startTime;
let elapsedTime = 0;
let timerInterval;

const timeDisplay = document.querySelector('#time');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

function updateTime() {
    const now = Date.now();
    const timePassed = now - startTime + elapsedTime;

    const hours = Math.floor((timePassed / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timePassed / (1000 * 60)) % 60);
    const seconds = Math.floor((timePassed / 1000) % 60);

    timeDisplay.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startButton.addEventListener('click', () => {
    if (!timerInterval) {
        startTime = Date.now();
        timerInterval = setInterval(updateTime, 1000);
    }
});

stopButton.addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        elapsedTime += Date.now() - startTime;
        timerInterval = null;
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    startTime = null;
    elapsedTime = 0;
    timeDisplay.innerHTML = '00:00:00';
});
