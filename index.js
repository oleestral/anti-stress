const board = document.querySelector('#board');
const colors = ['#5680E9', '#84CEEB', '#5AB9EA', '#C1C8E4', '#8860D0'];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', ()=> {
        setColor(square);
    });
    square.addEventListener('mouseleave', ()=> {
        removeColor(square);
    });

    board.append(square);
}
function setColor(item) {
    const color = getRandomColor();
    item.style.backgroundColor = color;
    item.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(item) {
    item.style.backgroundColor = "#1d1d1d";
    item.style.boxShadow = '0 0 2px #000';
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}