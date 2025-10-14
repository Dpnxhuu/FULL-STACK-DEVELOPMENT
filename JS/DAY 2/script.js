// function print(){
//     console.log("hello google");
// }

// print();
// print();
// print();
// print();
// print();
// print();

// function print(msg,n)
// {
//     console.log(`I jus want to say ${msg} ${n}`);
// }

// print("hey, I love Coding",3000);

// function sum(x,y)
// {
//     console.log(`Sum = ${x+y}`);
// };

// sum(10,8);

// let arrowSum = (x,y) => {      //Arrow function syntax
//     console.log(x+y);
// };

// arrowSum(5,5);

// console.log(typeof arrowSum)

// arrowSum = 5;

// console.log(typeof arrowSum);

// let arr = [12,14,15,16,17,18];

// arr.forEach(function num(val, n){

//     console.log(val, n , arr);
// });

// arr.forEach((value,idx)=>{
//     console.log(value,idx,arr);
// });

// console.log(arr);

// Ques: For a give array of Number, print the square of each value using the forEach loop.

// let array = [33,23,54,56];

// array.forEach((val)=>{
//     console.log(`Square of ${val} = ${val*val}`);
// });

// let arr = [12,13,14,15,16];

// let newArr = arr.forEach((val)=>{
//     return val;
// });

// console.log(newArr);


// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = arr.map((val)=>{
//     // console.log(val);
//     return val%2==0;
// });

// console.log(newArr);

// let arr = [1,2,3,4];

// let newArr = arr.filter((val)=>{

//     return val%2 ==0;
// });

// console.log(newArr);

// let newArr = arr.filter((val) => {
//     return val > 2;
// })

// console.log(newArr);

// let arr = [23,52,1,3,352,3432,234,32,0];

// let newArr = arr.reduce((prev,current) => {
//     return prev < current? prev: current;
// });

// console.log(newArr);

// let marks = [54,34,63,67,84,98,91, 92,94,12,34,56];
 
// let above = marks.filter((val,idx)=>{
//         return val > 90;
// });

// console.log(above);

let n = prompt("Enter your number: ");
let arr= [];

for(let i = 0; i < n; i++)
{
    arr[i] = i+1;
}
console.log(`Array elements are = ${arr}`);

let sum = arr.reduce((prev,current)=>{
    return prev+current;
});
console.log(`Sum = ${sum}`);

let product = arr.reduce((prev,curr)=>{
        return prev*curr;
});

console.log(`Factorial = ${product}`);