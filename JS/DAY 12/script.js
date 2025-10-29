// Date 26/10/2025
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
// let arr = [2,0,2,1,1,0];
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
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let k = Number(prompt("Enter value of k: "));
// k = k % arr.length;
// Reverse(0, arr.length - 1);
// Reverse(0, k - 1);
// Reverse(k, arr.length - 1);
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

// Leetcode question 1 -->
// let arr= [0,0,0,1,1,1,1,2,2,2,3,4,4,4,5,6,6,6,7,7];
// let j =1;
// for(let i = 0; i < arr.length-1; i++)
// {
//   if(arr[i] !== arr[i+1])
//   {
//     arr[j] = arr[i+1];
//     j++;
//   }
// }
// console.log(arr);
// console.log(j);

// Leetcode question 2 -->

// let arr = [1,5,9,11,14];
// let brr = [2,3,6,7,8,10,22,23];

// let temp = new Array(arr.length + brr.length);
// let i = (j = k = 0);
// while (i < arr.length && j < brr.length) {
//   if (arr[i] < brr[j]) {
//     temp[k++] = arr[i++];
//   } else {
//     temp[k++] = brr[j++];
//   }
// }

// while (j < brr.length) {
//   temp[k++] = brr[j++];
// }
// while (i < arr.length) {
//   temp[k++] = arr[i++];
// }

// console.log(temp);

// Bubble sorting -->
let arr= [23,234,5,3,2,1,45245,2,4,3,5,34,3,45,3,];

for(let i = 0; i <arr.length; i++)
{
  for(let j = i+1; j < arr.length; j++)
  {
    if(arr[i] > arr[j])
    {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);

// merge two array in place-->
// let arr1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
// let arr2 = [1, 2, 2];

// for (let i = 0; i < arr2.length; i++) {
//   arr1.pop();
// }

// let result = [];

// while (arr1.length && arr2.length) {
//   const next = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
//   result.push(next);
// }

// if (arr1.length) {
//   result = result.concat(arr1);
// } else if (arr2.length) {
//   result = result.concat(arr2);
// }

// arr1.splice(0, arr1.length, ...result);

// console.log(arr1);

// console.log(result);

// Merging two sorted array new approach with extra space best approach -->
// let arr1 = [-1,0,0,3,3,3,0,0,0];
// let arr2 = [1,2,2];

// let result = []

// while(arr1.length && arr2.length)
// {
//   const next = arr1[0] < arr2[0]? arr1.shift() : arr2.shift();
//   result.push(next);
// }

// if(arr1.length)
// {
//   result = result.concat(arr1);
// }
// else if(arr2.length)
// {
//   result = result.concat(arr2);
// }

// console.log(result);

// best time to buy and sell stock -->

// let arr = [7,1,5,3,6,4];
// let max = 0;
// let min = arr[0];
// let profit = 0;
// for(let i = 0 ; i < arr.length; i++)
// {
//   if(arr[i] < min)
//   {
//     min = arr[i];
//   }
//   else{
//     profit = arr[i]-min;
//   }
//   if(profit > max)
//   {
//     max =profit;
//   }
// }

// if(max > 0) console.log(max);
// else console.log("0");

// sort colors -->

// let arr = [2, 0, 2, 1, 1, 0];
// let result = [];

// let zero = 0;
// let one = 0;
// let two = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     zero++;
//   } else if (arr[i] === 1) {
//     one++;
//   } else if (arr[i] === 2) {
//     two++;
//   }
// }

// for (let i = 0; i < zero; i++) {
//   result.push(0);
// }

// for (let i = 0; i < one; i++) {
//   result.push(1);
// }

// for (let i = 0; i < two; i++) {
//   result.push(2);
// }

// console.log(result);
