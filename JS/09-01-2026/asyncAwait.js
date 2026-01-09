// const data = fetch("https://api.github.com/users").then((response) =>{
//     return response.json();
// }).then((response)=>{
//     console.log(response);
// })

// const { jsx } = require("react/jsx-runtime");

// const { jsx } = require("react/jsx-runtime");

// const data = await fetch("https://api.github.com/users");
// const json = await data.json();
// console.log(json);
// console.log("End");

//Recommended approach -->

async function github() {
  try {
    const response = await fetch("https://api.github.com/users");
    var json = await response.json();

    if(!response.ok){
        throw new Error("Data not found");
    }

    for (let user of json) {
      const parent = document.createElement("div");
      parent.classList.add("first");
      const img = document.createElement("img");
      const p = document.createElement("p");
      const a = document.createElement("a");
      parent.append(img, p, a);
      document.body.append(parent);
      img.src = user.avatar_url;
      p.textContent = `Username: ${user.login}`;
      a.textContent = "Visit Profile";
      a.href = user.html_url;
      a.target = "_blank";
    }
  } catch (error) {
    console.log(error);
  }
}
github();
