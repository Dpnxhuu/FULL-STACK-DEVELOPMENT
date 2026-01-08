const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  let boy = document.getElementById("boy").value.length;
  let girl = document.getElementById("girl").value.length;

 console.log(Math.floor(Math.random()*100)+"%");
  e.preventDefault();
});


