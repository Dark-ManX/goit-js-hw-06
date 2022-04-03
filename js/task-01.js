const categoryEl = document.querySelector('#categories');

const itemsEl = categoryEl.querySelectorAll('.item');
const countItemEl = (itemsEl) => `Number of categories: ${itemsEl.length}`;

console.log(countItemEl(itemsEl));
console.log('');

const arr = [...categoryEl.children]

function getTitleAndLi(arr) {
    return arr.map(el => {
        return {
            Category: el.querySelector('h2').textContent,
            Elements: el.querySelectorAll('li').length,
    }
    });
}

console.log(getTitleAndLi(arr));










