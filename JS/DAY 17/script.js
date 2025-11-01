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

// let arr = [2,4,5,6,7,8,9];
// let found = false;
// let target = Number(prompt("Enter target:"));
// let first = 0;
// let end = arr.length-1;
// let mid = Math.floor((first + end)/2);
// while(first <= end)
// {
//    if(target===arr[mid])
//    {
//     console.log(mid);
//     found = true;
//     break;
//    }
//    else if (target < arr[mid])
//    {
//     end = mid-1;
//    }
//    else if(target > arr[mid])
//    {
//     first = mid+1;
//    }
//    mid = Math.floor((first + end)/2);
// }

// if(!found)
// {
//   console.log("Data not found");
// }

// merge sort -->
// function mergeSort(arr) {
//   // 1️⃣ Base Case: agar array me sirf 1 ya 0 element hai toh wahi return karo
//   if (arr.length <= 1) {
//     return arr;
//   }

//   // 2️⃣ Beech ka index nikal lo (mid)
//   const mid = Math.floor(arr.length / 2);

//   // 3️⃣ Array ko do parts me tod do: left aur right
//   const left = mergeSort(arr.slice(0, mid)); // first half
//   const right = mergeSort(arr.slice(mid));   // second half

//   // 4️⃣ Dono sorted halves ko merge karo
//   return merge(left, right);
// }

// function merge(left, right) {
//   let result = []; // yahan sorted elements store honge
//   let i = 0; // left array pointer
//   let j = 0; // right array pointer

//   // 5️⃣ Dono arrays ke elements compare karte jao
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]); // chhota element pehle daal do
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   // 6️⃣ Agar left ya right me kuch element bache ho toh unhe add kar do
//   while (i < left.length) {
//     result.push(left[i]);
//     i++;
//   }
//   while (j < right.length) {
//     result.push(right[j]);
//     j++;
//   }

//   return result; // 7️⃣ Sorted merged array return karo
// }

// // 🔹 Test
// const arr = [5, 2, 8, 1, 3];
// console.log(mergeSort(arr)); // Output: [1, 2, 3, 5, 8]
