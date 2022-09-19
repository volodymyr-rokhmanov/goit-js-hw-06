function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberEl = document.querySelector(`input`);
console.dir(numberEl);

const buttonCreate = document.querySelector(`[data-create]`);

const buttonDestroy = document.querySelector(`[data-destroy]`);

const boxes = document.querySelector(`#boxes`);

let numberBox = [];

numberEl.addEventListener("input", (event) => {
  console.log(event);
  boxes.innerHTML = "";
  numberBox.push(event.target.value);
  console.log(numberBox);
  return numberBox;
});

const createBoxes = (amount) => {
  amount = numberBox;
  amount.map(
    (item) =>
      (boxes.innerHTML += `<div style="width: ${
        +20 + (item *= 10)
      }px; height: ${
        +20 + item
      }px; background-color: ${getRandomHexColor()}"></div>`)
  );
  numberBox = [];
  numberEl.value = "";
};

buttonCreate.addEventListener("click", createBoxes);

buttonDestroy.addEventListener("click", (event) => {
  boxes.innerHTML = "";
  document.location.reload();
});

document.addEventListener("keydown", (event) => {
  console.log(event);
  event.returnValue = false;
});
