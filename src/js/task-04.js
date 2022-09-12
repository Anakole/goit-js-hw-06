const buttonEl = document.querySelector("#counter");
const decrementBtn = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  'button[data-action="increment"]'
);
const counterValueEl = document.querySelector("#value");

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

decrementBtn.addEventListener("click", function () {
  counterValue.decrement();
  counterValueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", function () {
  counterValue.increment();
  counterValueEl.textContent = counterValue.value;
});
