// Date: 30-10-2025, Time: 12:18 PM 

const prompt = require('prompt-sync')();

// let m = prompt("Enter m:");
// let n = prompt("Enter n:");
// let factor =0;
// let max = 0;
// if(n<m)
// {
//     for(let i = 0; i <= n; i++)
// {
//     if(m%i === 0 && n%i ===0)
//     {
//         factor = i;
//     }
// }
// }
// else{
//     for(let i = 0; i <= m; i++)
// {
//     if(m%i === 0 && n%i ===0)
//     {
//         factor = i;
//     }
// }
// }

// console.log(factor);

// Q.1 GCD of odd and even sum of n numbers -->(worst case)
// let n = 4;
// let sumOdd = 0; 
// let sumEven = 0;
// let GCD = 0;
// let factor = 0;
// for(let i = 1; i <= 4; i++)
// {
//     let odd = (i*2)-1;
//     sumOdd = sumOdd + odd;
//     let even = (i*2);
//     sumEven = sumEven + even;
// }
// console.log(sumEven,sumOdd);
// for(let i = 1; i <= sumEven; i++)
// {
//     if(sumOdd%i === 0 && sumEven%i === 0)
//     {
//          factor = i;
//     }
//     GCD = Math.max(GCD,factor);
// }
// console.log(`GCD is: ${GCD}`);

// let n = prompt("Enter n:");
// let sumOdd = 0; 
// let sumEven = 0;
// let GCD = 0;
// let factor = 0;
// for(let i = 1; i <= n; i++)
// {
//     let odd = (i*2)-1;
//     sumOdd = sumOdd + odd;
//     let even = (i*2);
//     sumEven = sumEven + even;
// }
// console.log(sumOdd,sumEven);
// for(let i = 1; i <= sumEven; i++)
// {
//     if(sumOdd%i === 0 && sumEven%i === 0)
//     {
//          factor = i;
//     }
//     GCD = Math.max(GCD,factor);
// }
// console.log(`GCD is: ${GCD}`);

// New approach -->
// let n = prompt("Enter n:");
// let sumOdd = n*n;
// let sumEven = n*(n+1);
// let factor = 0;
// let gcd = 0;
// for(let i = 1; i <= sumEven; i++)
// {
//     if(sumEven%i === 0 && sumOdd%i ===0)
//     {
//         factor = i;
//     }
//     gcd = Math.max(gcd,factor);
// }
// console.log(gcd);

// my recursive gcd concept -->
// let n = prompt("Enter n:");
// let m = prompt("Enter m:");
// while(n!=m)
// {
//     if(n > m)
//     {
//         n = n-m;
//     }
//     else
//     {
//         m = m-n;
//     }
// }
// console.log(n);

// Recursive version -->
// let n = prompt("Enter n:");
// let m = prompt("Enter m:");

// function gcd(n,m){
//     if(n==m) return n;
//     if(n>m)
//     {
//         n = n-m;
//     }
//     else
//     {
//         m = m-n;
//     }
//     return gcd(n,m);
// }

// console.log(gcd(n,m));

// sum of n numbers recursive function -->
// let  x= 5;
// function sum(x)
// {
//     if(x==1) return x;
//     return x + sum(x-1);
// }

// console.log(sum(x));

// Euclidean gcd concept -->
// let a = prompt("Enter a: ");
// let b = prompt("Enter b: ");

// function gcd(a,b)
// {
//     if(b==0) return a;
//     return gcd(b,a%b);
// }
// console.log(gcd(a,b));

// Factor logn -->
let n = prompt("Enter n:");
for(let i = 0; i <= Math.sqrt(n); i++)
{
    if(n%i === 0 )
    {
        process.stdout.write(i+" ");
    }
}
for(let i = Math.floor(Math.sqrt(n)); i >= 1; i--)
{
    if(n%i === 0 )
    {
        if(n/i != i)
        {
            process.stdout.write(n/i+" ");
        }
    }
}

// VIDEO PART 11 STOP AT 1:09