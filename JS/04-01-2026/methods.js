const prompt = require('prompt-sync')();

// let arr = [2,4,6,8];
// let sum = 0;

// arr.forEach((numb) =>{
//     sum+=numb;
// })

// console.log(sum);

// arr.forEach((numb,ind,ar) =>{
//     console.log(numb,ind,ar);
// })

// arr.forEach((num) => {
//     if(num > 5)
//     {
//         console.log(num);
//     }
// })

// let grt = arr.forEach((nums) => nums>5);

// console.log(grt);

// let req = arr.filter((nums) => nums>7);

// console.log(req);

// let arr = [1,2,3,4,5,6,7,8,9,10];

// Array.prototype.filtering = function(compare){
//     let ans = [];
//     for(let num of this){
//         if(compare(num)){
//         ans.push(num);
//     }
//     }
//     return ans;
// }

// let newArr = arr.filtering((nums) => nums>5);
// console.log(newArr)
// let a = [12,42,63,8,4,4,95,11,22];
// let c = a.filtering((num) => num>20);
// console.log(c);
// let arr = [9,1,3,2,6,7,8,0,4,5,];

// console.log(arr.sort((a,b) => a-b));

// let arr = [9,1,3,2,6,7,8,0,4,5];

// let [a,b] = arr;
// console.log(a,b);
// for(let a of arr)
// {
//     console.log(a);
// }

// let product = [{id: 1, sec: 'A', class: 'S'},{id: 2, sec: 'B', class: 'O'}];
// let b = product.filter((num) => num.id>1);
// console.log(b);

let arr = [1,2,3,3,4,5,66,7,88,66];

let st = new Set(arr);
st.add(199);
st.add(200);
console.log(st);
