const inputEl = document.querySelector(`#font-size-control`);

const textEl = document.querySelector(`#text`);

const onSizeControl = (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
};

inputEl.addEventListener(`input`, onSizeControl);
