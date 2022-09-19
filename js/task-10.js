function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberEl = document.querySelector(`input`);
console.dir(numberEl);

const buttonCreate = document.querySelector(`[data-create]`);

const buttonDestroy = document.querySelector(`[data-destroy]`);

const boxes = document.querySelector(`#boxes`);

let numberBox = [];

const onInputNumber = (event) => {
  console.log(event);
  numberBox.push(event.target.value);
  console.log(numberBox);
  return numberBox;
};

numberEl.addEventListener("input", onInputNumber);

const createBoxes = (amount) => {
  amount = numberBox;
  // numberEl.value = "";
  amount.map(
    (item) =>
      (boxes.innerHTML += `<div style="width: ${
        +20 + (item *= 10)
      }px; height: ${
        +20 + item
      }px; background-color: ${getRandomHexColor()}"></div>`)
  );
};

buttonCreate.addEventListener("click", createBoxes);

const onClickDestroy = (event) => {
  boxes.innerHTML = "";
  document.location.reload();
};

buttonDestroy.addEventListener("click", onClickDestroy);

document.addEventListener("keydown", (event) => {
  console.log(event);
  event.returnValue = false;
});
