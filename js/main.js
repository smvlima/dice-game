const item = document.getElementsByClassName(header-cta);
item.addEventListener('click', rollTheDices);
function rollTheDices () {
const randomPlayerOne = Math.ceil((Math.random()*6));
const randomPlayerTwo = Math.ceil((Math.random()*6));
    document.querySelector('.dice-right').setAttribute('src', `./images/dice${randomPlayerOne}.png`);
    document.querySelector('.dice-left').setAttribute('src', `./images/dice${randomPlayerTwo}.png`);
if (randomPlayerOne > randomPlayerTwo) {
    document.querySelector('.header-cta').textContent = 'Player One Wins';
} else if (randomPlayerTwo > randomPlayerOne) {
    document.querySelector('.header-cta').textContent = 'Player Two Wins';
} else if (randomPlayerOne === randomPlayerTwo) {
    document.querySelector('.header-cta').textContent = 'Draw';
}
}
