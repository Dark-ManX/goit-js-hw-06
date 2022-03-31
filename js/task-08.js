const formRef = document.querySelector('.login-form');
// const submitBtnRef = document.querySelector('button');

formRef.addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Может введёшь логин и пароль сначала?');
    }

    const obj = {
        [email.name]: email.value,
        [password.name]: password.value,
    }
    console.log(obj);
    return obj;
}