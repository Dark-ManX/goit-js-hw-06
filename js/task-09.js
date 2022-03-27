const bodyRef = document.querySelector('body');
const colorRef = document.querySelector('.color');
const btnRef = document.querySelector('.change-color');

btnRef.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  colorRef.textContent = `${getRandomHexColor()}`;
  bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
