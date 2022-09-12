const itemRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemRef.length}`);

itemRef.forEach((item) => {
  const titleRef = item.querySelector("h2");
  const itemEl = item.querySelectorAll("li");
  console.log(`Category: ${titleRef.textContent}`);
  console.log(`Elements: ${itemEl.length}`);
});
