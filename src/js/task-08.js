const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Ви не заповнили поле!");
    return;
  }

  const userData = {
    email: email.value,
    password: password.value,
  };

  console.log(userData);

  event.currentTarget.reset();
}
