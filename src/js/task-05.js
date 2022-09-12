const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("h1 #name-output");

inputRef.addEventListener("input", inputChange);

function inputChange(event) {
  nameRef.textContent = event.currentTarget.value || "Anonymous";
}
