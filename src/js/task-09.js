function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const widgetRef = document.querySelector(".widget");
const colorRef = widgetRef.querySelector(".color");
const buttonRef = widgetRef.querySelector(".change-color");

console.log(bodyRef);
console.log(widgetRef);
console.log(colorRef);
console.log(buttonRef);

const changeColorBg = (event) => {
  const color = getRandomHexColor();
  colorRef.textContent = color;
  bodyRef.style.backgroundColor = color;
};

buttonRef.addEventListener("click", changeColorBg);
