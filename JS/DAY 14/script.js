// Date: 28/10/2025 Time: 2:50 PM

const prompt = require("prompt-sync")();

// let str = "Deepanshu";
// console.log(str.slice(-5,str.length));
// console.log(str.substring(3));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.concat(" got no chill"));
// console.log(str.concat(" got no chill"));
// let str = 'deepanshu';
// console.log(str.charCodeAt(0)); 
// for(let i = 0; i <= 100; i++)
// {
//     console.log(i,"=", String.fromCharCode(i));
// }


// Q.1 Print all character in separate line -->

// let str ="Deepanshu";
// for(let i = str.length-1; i >= 0; i--)
// {
//     console.log(str[i]);
// }

// Q.2 Palindrome string 
// let str = "naman";
// let rev = '';
// for(let i = str.length-1; i >= 0; i--)
// {
//     rev = rev + str[i];
// }

// // console.log(rev);

// if(rev === str)
// {
//     console.log("yes it is palindrome");
    
// }
// else{
//     console.log("no it is not palindrome");
// }

// Efficient method -->
// let str = "madm";
// let count=0;
// let i = 0;
// let j = str.length-1;
// while(i<j)
// {
//     if(str[i] === str[j])
//     {
//         count++;
//     }
//     else {
//         console.log("Not palindrome");
//         return 0;
//     }
//     i++;
//     j--;
// }

// if(count === Math.floor(str.length/2))
// {
//     console.log("Palindrome");
// }

// Second efficient method -->
// let str = prompt("Enter a String: ");
// let isPallindrome = true;
// let i =0;
// let j = str.length-1;
// while(i<j)
// {
//     if(str[i] !== str[j])
//     {
//         isPallindrome = false;
//         break;
//     }
//     i++;
//     j--;
// }
// if(isPallindrome) console.log("Pallindrome");
// else console.log("Not Pallindrome");

// Q.3 Toggle each character -->

// let str = prompt("Enter a string:");
// let result ='';
// for(let i = 0; i < str.length; i++)
// {
//     let char = str[i];
//     if(char === char.toLowerCase())
//     {
//         result = result+char.toUpperCase();
//     }
//     else{
//          result = result+char.toLowerCase();
//     }
// }

// console.log(result);

// Q.4 Frequency of each character -->
// let str = prompt("Enter any string:");
// let obj = {};
// for(let i = 0; i < str.length; i++)
// {
//     if(obj[str[i]] === undefined)
//     {
//         obj[str[i]] = 1;
//     }
//     else{
//         obj[str[i]] = obj[str[i]] + 1;
//     }
// }
// console.log(obj);

