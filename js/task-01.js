const categoriesEl = document.querySelector(`#categories`);

const itemEl = document.querySelectorAll(`.item`);

const namesEl = document.querySelectorAll(`.item h2`);

const allNumbersCategories = itemEl.length;
console.log(`Number of categories: ${allNumbersCategories}`);

const categoriesName = namesEl.forEach((nameEl) => {
  console.log(`Category: ${nameEl.textContent}`);
  console.log(`Elements: ${nameEl.nextElementSibling.children.length}`);
});
