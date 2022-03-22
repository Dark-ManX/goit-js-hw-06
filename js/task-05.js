const inputEl = document.querySelector('#name-input');
const outputedName = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {
    if (event.currentTarget.value === '') {
        return outputedName.textContent = 'Anonymous';
    }
    outputedName.textContent = event.currentTarget.value;      
}; 