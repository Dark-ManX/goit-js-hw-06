const input = document.querySelector('#validation-input');
// const validInput = document.querySelector('.valid');
// const invalidInput = document.querySelector('.invalid');

input.addEventListener('blur', onInput);

function onInput(event) {
    if (event.currentTarget.value.length !== Number(input.dataset.length)) {
       return input.classList.add('invalid');
    }
    input.classList.replace('invalid', 'valid');
}