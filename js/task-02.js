const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')

const potatoesEl = document.createElement('li');
potatoesEl.textContent = ingredients[0];
console.log(potatoesEl);

const mushroomsEl = document.createElement('li');
mushroomsEl.textContent = ingredients[1];
console.log(mushroomsEl);

const garlicEl = document.createElement('li');
garlicEl.textContent = ingredients[2];
console.log(garlicEl);

const tomatosEl = document.createElement('li');
tomatosEl.textContent = ingredients[3];
console.log(tomatosEl);

const herbsEl = document.createElement('li');
herbsEl.textContent = ingredients[4];
console.log(herbsEl);

const condimentsEl = document.createElement('li');
condimentsEl.textContent = ingredients[5];
console.log(condimentsEl);

ingredientsEl.after(potatoesEl, mushroomsEl, garlicEl, tomatosEl,
  herbsEl, condimentsEl);
