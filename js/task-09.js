function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector(`body`);

const colorEl = document.querySelector(`.color`);

const buttonEl = document.querySelector(`.change-color`);

const onClick = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = `${getRandomHexColor()}`;
  console.log(colorEl.textContent);
};

buttonEl.addEventListener("click", onClick);
