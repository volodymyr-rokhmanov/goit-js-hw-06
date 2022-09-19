function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberEl = document.querySelector(`input`);

const buttonCreate = document.querySelector(`[data-create]`);

const buttonDestroy = document.querySelector(`[data-destroy]`);

const boxes = document.querySelector(`#boxes`);

let numberBox = [];

function onInputNumber(event) {
  numberBox.push(event.target.value);
  console.log(numberBox);
  return numberBox;
}

numberEl.addEventListener("input", onInputNumber);

function createBoxes(amount) {
  amount = numberBox;
  amount.map(
    (item) =>
      (boxes.innerHTML += `<div style="width: ${(item *= 30)}px; height: ${item}px; background-color: ${getRandomHexColor()}"></div>`)
  );
}

buttonCreate.addEventListener("click", createBoxes);

const onClickDestroy = (event) => {
  boxes.innerHTML = "";
  document.location.reload();
};

buttonDestroy.addEventListener("click", onClickDestroy);
