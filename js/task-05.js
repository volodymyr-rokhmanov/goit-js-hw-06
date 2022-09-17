const inputEl = document.querySelector(`#name-input`);
console.log(inputEl);

const outputEl = document.querySelector(`#name-output`);
console.log(outputEl);

const onClick = (event) => {
  console.log(event);
  if (event.target.value === "") {
    outputEl.textContent = "Anonymous";
  } else outputEl.textContent = event.target.value;
};

inputEl.addEventListener("input", onClick);
