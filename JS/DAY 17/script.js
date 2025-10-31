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
// let x = Number(prompt("Enter x:"));
// let n = Number(prompt("Enter n:"));
// if (n === 0) {
//   console.log(1);
//   return 0;
// }

// function fn(x, n) {
//   if (n === 0) {
//     return 1;
//   }
//   let ans = fn(x, parseInt(n / 2));
//   if (n % 2 === 0) {
//     return ans * ans;
//   } else {
//     return ans * ans * x;
//   }
// }

// let ans = fn(x, n);
// if (n < 0) {
//   console.log(1 / ans);
// } else {
//   console.log(ans);
// }

// Q. Binarry search -->

let arr = [2,4,5,6,7,8,9,10,12,13,15,16,20];
let target = 6;
let first = 0;
let end = arr.length-1;
let mid = (first + end)/2;
while(first < end)
{
  console.log("Hi");
   if(arr[mid] === target )
   {
    console.log(mid);
    return 0;
   }
   else if (arr[mid] > target)
   {
    end = mid-1;
   }
   else if(arr[mid] < target)
   {
    first = mid+1;
   }
   mid = (first + end)/2;
}
console.log("Data not found");