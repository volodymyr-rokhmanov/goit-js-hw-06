const counter = document.querySelector(`#counter`);

const buttonDecr = document.querySelector(`button[data-action="decrement"]`);
// console.log(buttonDecr);

const buttonIncr = document.querySelector(`button[data-action="increment"]`);
// console.log(buttonIncr);

const value = document.querySelector(`#value`);

let counterValue = 0;

const onClick = (event) => {
  if (event.currentTarget === buttonDecr) {
    counterValue -= 1;
    // console.log(counterValue);
    value.textContent = `${counterValue}`;
    return counterValue;
  } else if (event.currentTarget === buttonIncr) {
    counterValue += 1;
    // console.log(counterValue);
    value.textContent = `${counterValue}`;
    return counterValue;
  }
};

buttonDecr.addEventListener("click", onClick);

buttonIncr.addEventListener("click", onClick);
