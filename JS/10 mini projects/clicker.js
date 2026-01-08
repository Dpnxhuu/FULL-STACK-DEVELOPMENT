const body = document.querySelector("body");
body.style.cursor = "pointer";
body.addEventListener("click", (e) => {
  const div = document.createElement("div");
  div.classList.add("circle");
  let color = ["red", "green", "yellow", "blue", "pink", "orange", "purple"];
  div.textContent = "Hi";
  div.style.top = `${e.clientY - 25}px`;
  div.style.left = `${e.clientX - 25}px`;
  div.style.backgroundColor = color[Math.floor(Math.random() * 7)];
  body.append(div);
  setTimeout(() => {
    div.remove();
  }, 5000);
});
