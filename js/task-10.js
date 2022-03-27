const refs = {
  divControlRef: document.querySelector('#controls'),
  inputRef: document.querySelector('input'),
  createRef: document.querySelector('[data-create]'),
  destroyRef: document.querySelector('[data-destroy]'),
  divForCreatedEl: document.querySelector('#boxes'),
}
const { divControlRef,
  inputRef,
  createRef,
  destroyRef,
  divForCreatedEl,} = refs

createRef.addEventListener('click', onCreateClick);
destroyRef.addEventListener('click', onDestroyClick);

function onCreateClick(event) {
  if (inputRef.value <= 0) {
    return null;
  };
  for (let i = 0; i < inputRef; i += 1) {
    let size = size[0] = 30;
    size[i] += 10;
    divForCreatedEl.innerHTML = `<div width="${size[i]}px", height="${size[i]}px", background-color="${getRandomHexColor()}">`;
  }
};

function onDestroyClick(event) {
  divForCreatedEl.innerHTML = '';
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

