const inputRef = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    textToChange.style.fontSize = `${event.currentTarget.value}px`;
}