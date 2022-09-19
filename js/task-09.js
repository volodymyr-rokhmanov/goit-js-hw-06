function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let colorRandom;

const bodyEl = document.querySelector(`body`);

const colorEl = document.querySelector(`.color`);

const buttonEl = document.querySelector(`.change-color`);

const onClick = () => {
  colorRandom = getRandomHexColor();
  bodyEl.style.backgroundColor = colorRandom;
  colorEl.textContent = `${colorRandom}`;
};

buttonEl.addEventListener("click", onClick);
