const prompt = require("prompt-sync")();

// let n = prompt("Enter anything: ");
// console.log(n);

// Q.1 find max number in an array -->
// let arr = [4000,200, 100, 50, 25, 400, 300,5000,4000];
// let max = -223423432;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log(max);

// Q.2 find minimum number in array -->
// let arr = [4000, 200, 100, 50, 25, 400, 300, 5000,0, 4000];
// let min = 2223423432;
// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(min);

// Q.3 find max and smax in an array -->
// let arr = [10,30,40,40,40,40];
// let max = -223423432;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);
// let smax = -2342322;
// for (let i = 0; i < arr.length; i++) {
//   if (smax < arr[i] && arr[i] !== max) {
//     smax = arr[i];
//   }
// }
// console.log(smax);

// Q.4 find minimum and second minimum in array -->
// let arr = [10,30,40,40,40,40];
// let min = 2223423432;
// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(min);

// let smin = 23432432432;
// for(let i = 0; i < arr.length; i++)
// {
//     if(smin > arr[i]  && arr[i] !== min)
//     {
//         smin = arr[i];
//     }
// }
// console.log(smin);

// Q.5 Reverse an array -->

// let arr = [1,2,3,4,5,6,7];
// for(let i = 0; i < arr.length; i++)
// {
//     process.stdout.write(`${arr[i]} `);
// }
// let temp;
// let i = 0;
// let j = arr.length-1;
// while(i<=j)
// {
//     temp = arr[i];
//     arr[i] = arr[j]
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log();
// for(let i = 0; i < arr.length; i++)
// {
//    process.stdout.write(`${arr[i]} `);
// }

// Method 2 -->
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// let brr = [];
// let size = arr.length - 1;
// for (let i = 0; i < arr.length; i++) {
//   brr[size] = arr[i];
//   size--;
// }
// console.log(brr);

// Q.6 put all the zero to the left section of the array and all the one to the right section of the array -->
// let arr = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
// let result = [];

// let zero = 0;
// let one = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     zero++;
//   } else {
//     one++;
//   }
// }

// for (let i = 0; i < zero; i++) {
//   result.push(0);
// }

// for (let i = 0; i < one; i++) {
//   result.push(1);
// }

// console.log(result);

// Second method -->
// let arr = [1,0,1,0,0,1,1,0,0,1,0,0,1];
// let n = arr.length;
// let count = 0; // count of zeros

// // Move all zeros to left side
// for (let i = 0; i < n; i++) {
//     if (arr[i] === 0) {
//         // swap arr[i] with arr[count]
//         let temp = arr[i];
//         arr[i] = arr[count];
//         arr[count] = temp;
//         count++;
//     }
// }

// console.log(arr);
// Output: [0,0,0,0,0,0,1,1,1,1,1,1,1]

// Q.7 left and right rotation by 1 step -->
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let n = arr[arr.length - 1];
// for (let i = arr.length - 1; i >= 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = n;
// console.log(arr);
// console.log(`Length of array: ${arr.length}`);

// Q.7 left and right rotation by k step -->
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let k = Number(prompt("Enter the value of K: "));
// k = k % arr.length;

// for (let i = 1; i <= k; i++) {
//   var n = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = n;
// }
// console.log(arr);

// The best approach for this question is this -->

// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = Number(prompt("Enter the value of K: "));
// k = k % arr.length;

// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// console.log(temp);

// More better approach -->
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let k = Number(prompt("Enter value of k: "));
// k = k % arr.length;
// Reverse(0, k - 1);
// Reverse(k, arr.length - 1);
// Reverse(0, arr.length - 1);
// console.log(arr);

// function Reverse(i, j) {
//   while (i <= j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// For right rotation -->
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = Number(prompt("Enter value of k: "));
k = k % arr.length;
Reverse(0, arr.length - 1);
Reverse(0, k - 1);
Reverse(k, arr.length - 1);
console.log(arr);

function Reverse(i, j) {
  while (i <= j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}
