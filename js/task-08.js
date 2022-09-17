const formEl = document.querySelector(`.login-form`);

let loginEl = {};

const onSendLogin = (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  if (email === "" || password === "") {
    alert(`Заполните все поля форм!!!!!!!`);
  } else loginEl.email = `${email}`;
  loginEl.password = `${password}`;
  console.log(loginEl);
  event.currentTarget.reset();
};

formEl.addEventListener("submit", onSendLogin);
