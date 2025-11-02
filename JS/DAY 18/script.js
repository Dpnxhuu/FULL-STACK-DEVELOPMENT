// Date 1-11-2025, time 11:54;
const prompt = require('prompt-sync')();
// Q. Empty an array (hard)2659. Make Array Empty

// let count = 0;
// nums.sort((a,b) => a-b);
// let n = nums.length;
// for(let i = 0; i < n; i++)
// {
//     nums.pop();
//     count++;
// }

// console.log(nums.length);
// console.log(count);
// // console.log(nums[0],nums[nums.length-1]);

// let count = 0;
// let sorted = [...nums].sort((a,b) => a-b);
// while(nums.length > 0)
// {
//     let min = sorted[0];
//     if(min === nums[0])
//     {
//         nums.shift();
//         sorted.shift();
//     }
//     else
//     {
//         nums.push(nums.shift());
//     }
//     count++;
// }
// console.log(count);


// let sorted = [...nums].sort((a, b) => a - b);
// let count = 0;
// let i = 0; // pointer to current front
// let n = nums.length;
// for (let j = 0; j < n; j++) { // loop over sorted order
//     while (nums[i % n] !== sorted[j]) {
//         i++;
//         count++;
//     }
//     i++;
//     count++;
// }
// console.log(count);

// let nums = [1,2,3];
// let sorted = [...nums].sort((a, b) => a - b);
// let count = 0;
// let i = 0; // pointer to current front
// let n = nums.length;
// for (let j = 0; j < n; j++) { // loop over sorted order
//     while (nums[i % n] !== sorted[j]) {
//         i++;
//         count++;
//     }
//     i++;
//     count++;
// }
// console.log(count);

// Advance function use hue hai jo maine abhi padhe nhi phir kabhi dekhunga yeh question. question name make array empty leetcode.
// /**
//  * O(N log N) solution using a Fenwick Tree (Binary Indexed Tree).
//  * This avoids simulating rotations by calculating the count of remaining elements
//  * in the cyclic path in O(log N) time per removal.
//  * @param {number[]} nums The input array of distinct numbers.
//  * @return {number} The total number of operations.
//  */
// const makeArrayEmpty = (nums) => {
//     const n = nums.length;
    
//     // Fenwick Tree (BIT) for O(log N) range sum queries and updates
//     class FenwickTree {
//         constructor(size) {
//             this.tree = new Array(size + 1).fill(0);
//             this.size = size;
//         }
//         update(i, delta) {
//             i++; // 0-based to 1-based index
//             while (i <= this.size) {
//                 this.tree[i] += delta;
//                 i += i & (-i);
//             }
//         }
//         query(i) {
//             i++; // 0-based to 1-based index
//             let sum = 0;
//             while (i > 0) {
//                 sum += this.tree[i];
//                 i -= i & (-i);
//             }
//             return sum;
//         }
//         queryRange(l, r) {
//             if (l > r) return 0;
//             return this.query(r) - this.query(l - 1);
//         }
//     }

//     // 1. Pair value with original index and sort by value (O(N log N))
//     const indexedNums = nums
//         .map((val, index) => ({ val, index }))
//         .sort((a, b) => a.val - b.val);

//     // 2. Initialize BIT with all elements present (1)
//     const bit = new FenwickTree(n);
//     for (let i = 0; i < n; i++) {
//         bit.update(i, 1);
//     }

//     let totalOperations = 0;
//     // 'prevIndex' is the original index of the element just removed.
//     let prevIndex = -1; 

//     // 3. Iterate in removal order (smallest to largest value) (O(N))
//     for (let i = 0; i < n; i++) {
//         const { index: currIndex } = indexedNums[i];

//         let rotationCount; // Count of remaining elements in cyclic path

//         // Calculate the count of *remaining* elements in the cyclic path
//         // from (prevIndex + 1) to currIndex (inclusive). (O(log N))
//         if (currIndex > prevIndex) {
//             // No wrap-around: (prevIndex, currIndex]
//             rotationCount = bit.queryRange(prevIndex + 1, currIndex);
//         } else {
//             // Wrap-around: (prevIndex, n-1] + [0, currIndex]
//             const firstPart = bit.queryRange(prevIndex + 1, n - 1);
//             const secondPart = bit.queryRange(0, currIndex);
//             rotationCount = firstPart + secondPart;
//         }

//         // Total operations = (rotations: rotationCount - 1) + (removal: 1)
//         // Total operations = rotationCount.
//         totalOperations += rotationCount;

//         // Mark the current element as removed in the BIT (O(log N))
//         bit.update(currIndex, -1);
//         prevIndex = currIndex;
//     }

//     return totalOperations;
// };

// // Example from the image:
// // let nums = [3, 4, -1];
// // console.log(makeArrayEmptyOptimized(nums)); // Output: 5

// // Your example:
// let numsExample = [3,4,-1];
// console.log(makeArrayEmpty(numsExample)); // Output: 3 
// // Simulation: [1,2,3] -> remove 1. Op 1: [2,3] -> remove 2. Op 2: [3] -> remove 3. Op 3: []. Total: 3


// merge sort -->
// let arr = [341,34,23,4,2,4,32,432,43,432,4,1,34,132,4,1324,1324,124,132,4132,4132,4132,4,1324,1324,34,132,4132,4,1324,132];
// console.log(mergeSort(arr));

// function mergeSort(arr)
// {
//     if(arr.length <= 1) return arr;

//     const mid = Math.floor(arr.length/2);
//     const left = mergeSort(arr.slice(0,mid));
//     const right = mergeSort(arr.slice(mid));

//     return merge(left,right);
// }

// function merge(left,right)
// {
//     let result = [];
//     let i = 0, j = 0;
//     while(i < left.length && j < right.length)
//     {
//         if(left[i] < right[j])
//         {
//             result.push(left[i]);
//             i++;
//         }
//         else{
//             result.push(right[j]);
//             j++;
//         }
//     }

//     while(i < left.length)
//     {
//         result.push(left[i]);
//         i++;
//     }
//     while(j < right.length)
//     {
//         result.push(right[j]);
//         j++;
//     }
//     return result;
// }