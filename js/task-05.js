const inputEl = document.querySelector('#name-input');
const outputedName = document.querySelector('#name-output');

const onInput = (event) => {
    if (event.currentTarget.value === '') {
        outputedName.textContent = 'Anonymous';
    }
    outputedName.textContent = event.currentTarget.value;      
}; 
inputEl.addEventListener('input', onInput);