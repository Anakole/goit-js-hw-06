const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const textSize = (event) => {
  textRef.style.fontSize = `${event.target.value}px`;
};

inputRef.addEventListener("input", textSize);
