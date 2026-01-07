const newElement = document.createElement("h1");
newElement.textContent = "Hey! coders";
newElement.id = "sec";
const ele = document.getElementById("first");
ele.before(newElement);
newElement.style.backgroundColor = "yellow";
ele.style.color = "blue";

const secElement = document.createElement("h3");
secElement.textContent = "Happy Diwali!";
ele.after(secElement);
// secElement.className = "diwali";
secElement.classList.add("diwali");
secElement.classList.add("holi");
secElement.classList.add("newyear");
secElement.classList.remove("newyear");
console.log(secElement);
newElement.style.fontSize = "100px";
newElement.before(secElement);