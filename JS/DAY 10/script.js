// let n = 23;

// for(let i = 0; i <= n/2; i++)
// {
//   console.log(i);
// }

// console.log(arr);
// console.log(`size: ${size}`);

// let n = "abc";
// for (let i = 1; i <= 5; i++) {
//   console.log("hello")
//   if (isNaN(n)) {
//     console.log("Invalid input");
//   }
// }

// let n = 19;
// // n = Number(n);
// let count=0;
// // let arr = [];
// // let size = 0;
// if (n > 0 && n !== 1) {
//   for (let i = 1; i <= n; i++) {
//     if(n%i === 0)
//     {
//       // arr[size] = i;
//       // size++;
//         count++;
//     }
//   }
//   // console.log(arr);
//   if(count === 2)
//   {
//     console.log(n,"is prime number");
//   }
//   else{
//     console.log(n,"is not a prime number");
//   }
// } else if (n === 1) {
//   console.log(
//     "1 is not a prime number because prime numberalways have 2 factor 1 and itself"
//   );
// }
// else{
//   console.log("The number should be +ve");
// }

// sum of digit -->

// let n = 11;
// let sum = 0;
// while(n>0)
// {
//     let rem = Math.trunc(n%10);
//     sum = sum + rem;
//     n = Math.trunc(n/10);
// }
// console.log(sum);

//reverse number -->

// let n = 2005;
// let rev = 0;
// while(n>0)
// {
//     let rem = n%10;
//     rev = rev*10 + rem;
//     n = Math.floor(n/10);
// }
// console.log(rev);

// Calculate factorial of any number -->

// let fact = 1;
// for(let i = 1; i <= 5; i++)
// {
//     fact = fact*i;
// }
// console.log(fact);

// check strong number -->

// let n = 145;
// let orgN = n;
// let sum = 0;
// if (isNaN(n)) {
//   console.log("Invalid input");
// }
// else {
//   while (n > 0) {
//     let fact = 1;
//     let lastDigit = n % 10;
//     for (let i = 1; i <= lastDigit; i++) {
//       fact = fact * i;
//     }
//     sum = sum + fact;
//     n = Math.floor(n / 10);
//   }
// }

// console.log(sum);

// if (orgN === sum) {
//   console.log("it is a strong number");
// }

// let num = 7;
// let luckyNumber = 7;

// if(num > luckyNumber)
// {
//     console.log("Too high");
// }
// else if(num < luckyNumber)
// {
//     console.log("Too low");
// }
// else{
//     console.log("congrats you choose the right number");
// }

// let num = prompt("You are in triangle untill you enter the exit");
// while(num !== 'exit')
// {
//     num = prompt("You are in triangle untill you enter the exit");
// }

// let num = Math.floor(Math.random() * 10) + 1;
// num = Number(num);
// let luckyNumber = Number(prompt("Enter your lucky number: "));
// while (num !== luckyNumber) {
//   let luckyNumber = Number(prompt("Enter your lucky number: "));
// }

// let num = Math.floor(Math.random() * 10) + 1;
// num = Number(num);
// let luckyNumber = 5;

// console.log("Num: ", num);
// console.log("Lucky: ", luckyNumber);

// if (num > luckyNumber) {
//   console.log("too low");
// } else if (num < luckyNumber) {
//   console.log("Too high");
// } else {
//   console.log("congrats! You entered right number");
// }
