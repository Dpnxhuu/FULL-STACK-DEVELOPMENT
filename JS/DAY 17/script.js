// Date: 31-10-2025, Time: 1:40 PM

const prompt = require("prompt-sync")();

// Q.1 power(x,n)
// let x = prompt("Enter x:");
// let n = prompt("Enter n:");
// let power = Math.pow(x,n);
// console.log(power);
// console.log(1/1024);
// let x = Number(prompt("Enter x:"));
// let n = Number(prompt("Enter n:"));
// let y = x;
// if(n === 0 || x === 1)
// {
//     // console.log("first condition")
//     console.log("1");
//     return 1;
// }
// for (let i = 1; i < Math.abs(n); i++) {
//   if (n < 0) {
//     x = x*y;
//   } else {
//     x = x * y;
//   }
// }
// if(n < 0)
// {
//     console.log(1/x);
// }
// else
// {
//     console.log(x);
// }

// Q. Power x,n
let x = Number(prompt("Enter x:"));
let n = Number(prompt("Enter n:"));
if (n === 0) {
  console.log(1);
  return 0;
}

function fn(x, n) {
  if (n === 0) {
    return 1;
  }
  let ans = fn(x, parseInt(n / 2));
  if (n % 2 === 0) {
    return ans * ans;
  } else {
    return ans * ans * x;
  }
}

let ans = fn(x, n);
if (n < 0) {
  console.log(1 / ans);
} else {
  console.log(ans);
}
