const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

const onBlur = (event) => {
  if (event.target.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.remove(`valid`);
    inputEl.classList.add(`invalid`);
  } else if (event.target.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.replace(`invalid`, `valid`);
  }
};

inputEl.addEventListener("blur", onBlur);
