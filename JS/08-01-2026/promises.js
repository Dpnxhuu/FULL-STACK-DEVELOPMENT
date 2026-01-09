// const p1 = fetch('https://api.github.com/users');

// console.log(p1)

// const p2 = p1.then((response)=>{
//     return response.json();
// })

// p2.then((response) =>{
//     console.log(response)
// })

//recommended method knowns as promise chaining.

// fetch("https://api.github.com/users")
//   .then((response) => {
//     if(!response.ok)
//     {
//       throw new Error("Data is not present");
      
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const div = document.createElement("div");
//     document.body.append(div);
//     div.classList.add("first");
//     for (let i = 0; i < data.length; i++) {
//       const img = document.createElement("img");
//       div.append(img);
//       img.style.height = "200px";
//       img.style.widows = "200px";
//       img.src = data[i].avatar_url;
//     }
//   }).catch((Error)=>{
//     const div = document.getElementById('sec');
//     div.textContent = Error.message;
//   })


//How to create promises in js

 const p1 = new Promise((resolve,reject) =>{
  if(false)
  {
    resolve("Resolved");
  }
  else reject("Rejected");
 }).then((Response)=>{
  console.log(Response);
 }).catch((Reject) =>{
  console.log(Reject);
 })