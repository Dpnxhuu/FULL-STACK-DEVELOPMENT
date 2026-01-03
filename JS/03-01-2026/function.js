const prompt = require('prompt-sync')();

let num = 12;

// function god(A)
// {
//     console.log(num);
//     console.log(A);
// };

// god(5);
// (function hello(){
//    console.log(num);
// })();
// pie(5);
// const pie = (num) => {
//     console.log(num);
// }

// (() => {
//     console.log("Hello Mike");
// })();
// console.log(a);
// var a = 10;

// hello();

// const hello = () => {
//     console.log("Hello world");
// }

// function hello(goodbye){
//     console.log("Hello google");
//     goodbye(namaste);
// }

// function namaste()
// {
//     console.log("Namaste Google");

// }

// function goodbye(namaste)
// {
//     console.log("Googbye Google");
//     namaste();
// }

// hello(goodbye);


function hey()
{
    let count = 0;
    function increment()
    {
        count++;
        return count;
    }
    return increment;
}

let counter = hey();

console.log(counter());
console.log(counter());
console.log(counter());



