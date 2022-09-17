const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allIngredients = document.querySelector(`#ingredients`);

const itemAllEl = ingredients.map((ingridient) => {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add(`item`);
  itemEl.textContent = `${ingridient}`;
  return itemEl;
});
console.log(itemAllEl);

allIngredients.append(...itemAllEl);
