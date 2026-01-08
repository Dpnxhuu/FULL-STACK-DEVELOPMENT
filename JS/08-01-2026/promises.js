// const p1 = fetch('https://api.github.com/users');

// console.log(p1)

// const p2 = p1.then((response)=>{
//     return response.json();
// })

// p2.then((response) =>{
//     console.log(response)
// })



//recommended method knowns as promise chaining.

fetch("https://api.github.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
