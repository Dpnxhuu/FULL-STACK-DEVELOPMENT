// Date: 12/11/2025

const prompt = require('prompt-sync')();

// let arr = [2,3,4,5,6,7,8,9];

// arr.forEach((number) =>{
//     console.log(number);
// });

// let arr = [2,3,4,5,6,7,8,9];

// arr.forEach((number,index) =>{
//     console.log(number,index);
// });

// let arr = [2,3,4,5,6,7,8,9];

// arr.forEach((number,index,arr) =>{
//     console.log(number,index,arr);
// });

// let arr = [2,3,4,5,6,7,8,9];

// let brr = arr.filter((number) => number>5);

// console.log(brr);

// let arr = [2,3,4,5,6,7,8,9];

// arr.filtering = (function(compare){
//     let ans = [];
//    for(let num of this)
//    {
//        if(compare(num))
//        {
//         ans.push(num);
//        }
//    }
//     return ans;
// });

// let newArr = arr.filtering((num) => num>5);
// console.log(newArr);

let brr = [2,3,4,5,6,7,8,9];

Array.prototype.filtering = (function(compare){
    let ans = [];
   for(let num of this)
   {
       if(compare(num))
       {
        ans.push(num);
       }
   }
    return ans;
});

let newArr = brr.filtering((num) => num>5);
console.log(newArr);