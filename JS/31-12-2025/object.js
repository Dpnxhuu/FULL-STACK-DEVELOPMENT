const prompt = require('prompt-sync')();

// const obj = {
//     name: 'Deepanshu',
//     email: 'dpnshuu@gmail.com',
//     'Mobile Number': 8755372698,
//     password: 'Dpnxhuu@0579',

// };

// console.log(obj['name']);
// console.log(obj.email);
// delete obj.password;
// console.log(obj)
// for(let key in obj)
// {
//     console.log("Key:",key,"Value:",obj[key]);
// }


// const obj = {
//     name: 'Deepanshu',
//     email: 'dpnshuu@gmail.com',
//     'Mobile Number:': 8755372698,
//     password: 'Dpnxhuu@0579',
// };

// // console.log(Object.entries(obj));

// for(let [key,values] of Object.entries(obj)){
//     console.log(key,values);
// }

// let user = {
//     name: "Deepanshu",
//     email: "dpnxhuu@gmail.com",
//     address: {
//         District: "Meerut",
//         Village: "Rasulpur Aurangabad",
//         State: "Uttar Pradesh",
//         road: {
//             abullahpur: true,
//             Ganganagar: false
//         }
//     }
// }

// let user2 = {...user}; It makes shallow copy.

// user.address.District = "Gzb";
// user2.name = "Rishi";
// console.log(user2);

// let user2 = structuredClone(user); It makes deep copy of an object.

// user.address.District = "Ghaziabad";
// user.address.road.Ganganagar = true;

// console.log(user2);

let arr = [0,1,2,[2,4,6],10];

// let brr = [...arr]; It create a shallow copy in array too.

// let brr = structuredClone(arr); For Deep copy in array.

brr[2] = 10;
brr[3][0] = 20;
console.log(arr);