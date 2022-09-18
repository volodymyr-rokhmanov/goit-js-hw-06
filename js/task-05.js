const inputEl = document.querySelector(`#name-input`);

const outputEl = document.querySelector(`#name-output`);

const onClick = (event) => {
  if (event.target.value === "") {
    outputEl.textContent = "Anonymous";
  } else outputEl.textContent = event.target.value;
};

inputEl.addEventListener("input", onClick);
