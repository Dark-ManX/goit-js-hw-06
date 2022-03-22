const input = document.querySelector('#validation-input');
// const validInput = document.querySelector('.valid');
// const invalidInput = document.querySelector('.invalid');

const onInput = (event) => {
    

    if (event.currentTarget.value.length !== input.dataset.length) {
        return input.classList.add('.invalid');
    }
    return input.classList.add('.valid');
}
input.addEventListener('blur', onInput);

