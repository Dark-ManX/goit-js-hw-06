const categoryEl = document.querySelector('#categories');
const firstItemEl = categoryEl.querySelector('.item-1');
const secondItemEl = categoryEl.querySelector('.item-2');
const thirdItemEl = categoryEl.querySelector('.item-3');

const itemsEl = categoryEl.querySelectorAll('.item');
const countItemEl = (itemsEl) => `Number of categories: ${itemsEl.length}`;
console.log(countItemEl(itemsEl));
console.log('');


function getCategoryTitleAndLiCount(firstItemEl) {
    const titleOfItem = firstItemEl.querySelector('h2');
    const liCountOfItem = firstItemEl.querySelectorAll('li');
    
    return `Category: ${titleOfItem.textContent}
Elements: ${liCountOfItem.length}`;
}
console.log(getCategoryTitleAndLiCount(firstItemEl));
console.log('');

console.log(getCategoryTitleAndLiCount(secondItemEl));
console.log('');

console.log(getCategoryTitleAndLiCount(thirdItemEl));









