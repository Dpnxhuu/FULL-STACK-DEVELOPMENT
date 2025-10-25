const prompt = require("prompt-sync")();

// // Taking user input
// const name = prompt('What is your name? ');
// console.log(`Hello, ${name}!`);

// const prompt = require('prompt-sync')();

// let a = prompt("Enter anything: ");
// process.stdout.write(a);
// process.stdout.write("Hello world");

// Pattern 1 -->
// let n = Number(prompt("Enter any number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
//   //  process.stdout.write(" ");
// }

// Pattern 2 -->
// let n = Number(prompt("Enter any number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
//   //  process.stdout.write(" ");
// }

// Pattern 3 -->
// let n = Number(prompt("Enter any number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j+" ");
//   }
//   console.log();
//   //  process.stdout.write(" ");
// }

// Pattern 4 -->
// let n = Number(prompt("Enter any number: "));
// for (let i = 65; i <= n; i++) {
//   for (let j = 65; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(j)+" ");
//   }
//   console.log();
//   //  process.stdout.write(" ");
// }

// Pattern 5 -->
// let n = Number(prompt("Enter any number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = n; j >= i; j--) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// pattern 6 mirror -->
// let n = Number(prompt("Enter any number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n-i+1; j++) {
//     process.stdout.write("  ");
//   }
//   for(let j = 1; j <= i; j++)
//   {
//     process.stdout.write(" *");
//   }
//   console.log();

// }

// Pattern 7 -->
// let n = Number(prompt("Enter any number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// Pattern 10 v -->
let n = Number(prompt("Enter any number: "));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n*2-1; j++) {
    if (i == j || i + j == n*2) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}
