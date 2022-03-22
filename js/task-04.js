const decrEl = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrEl = document.querySelector('button[data-action="increment"]');

let count = 0;

const onDecrEl = () => {
    count -= 1;
    console.log('decr was clicked');
    valueEl.textContent = count;
}
decrEl.addEventListener('click', onDecrEl);

const onIncrEl = () => {
    count += 1;
    console.log('incr was clicked');
    valueEl.textContent = count;
}
incrEl.addEventListener('click', onIncrEl);


