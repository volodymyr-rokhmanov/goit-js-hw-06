const inputEl = document.querySelector(`#font-size-control`);
console.dir(inputEl);

const textEl = document.querySelector(`#text`);
console.dir(textEl);
textEl.style.fontSize = `${inputEl.value}px`;

const onSizeControl = (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
};

inputEl.addEventListener(`input`, onSizeControl);
