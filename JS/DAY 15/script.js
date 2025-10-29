// Date 29/10/2025, Time: 02:00 PM
const prompt = require('prompt-sync')();
// let a = 400;
// let b = a.toString();
// console.log(a);
// console.log(b);

// Sorting - DSA
// Q.1 Bubble sorting

    let arr = [];
    let n = prompt("Enter the size of array:");
    for(let i = 0; i < n; i++)
    {
        arr[i] = prompt(`Element ${i+1} enter karo: `);
    }
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i+1; j < arr.length; j++)
        {
            if(arr[i] > arr[j])
            {
                let swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }

    console.log(arr);