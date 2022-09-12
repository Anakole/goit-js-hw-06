const inputRef = document.querySelector("#validation-input");
const inputRefLength = inputRef.getAttribute("data-length");

console.log(inputRef);
console.log(inputRefLength);

inputRef.addEventListener("blur", inputBlur);

function inputBlur(event) {
  const inputValid =
    event.target.value.length === Number(inputRefLength);

  if (inputValid) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  }
}

console.log(inputBlur);
