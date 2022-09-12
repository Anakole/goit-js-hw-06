const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const elements = ingredients.map((option) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = `${option}`;
  itemRef.classList.add("item");

  return itemRef;
});

console.log(elements);

listRef.append(...elements);
