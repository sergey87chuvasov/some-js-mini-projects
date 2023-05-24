const hex = [0,1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
const btn = document.getElementById('btn');
const color = document.getElementById('color');
const container = document.querySelector('.container');

btn.addEventListener('click', () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomeNumber()]
    }
    color.textContent = hexColor;
    container.style.transition = '0.2s';
    container.style.borderColor = hexColor;
    container.style.boxShadow = ' 0 0 20px ' + hexColor;
    color.style.color = hexColor;
    btn.style.borderColor = hexColor;
}
)

function getRandomeNumber() {
    return Math.floor(Math.random() * hex.length)
}