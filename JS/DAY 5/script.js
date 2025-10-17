// let student = {
//     name: "Deepanshu",
//     course: "BCA",
//     "Roll No": 21,
//     Address: "Rasulpur Aurangabad Meerut",
// };

// console.log(student);
// console.log(Object.keys(student));
// console.log(student["Roll No"]);

// for(let val in student)
// {
//     console.log(`${val} is ${student[val]}`);
// }

// console.log(student);
// console.log(Object.values(student));
// console.log(Object.entries(student));
// console.log(student);

// Destructing krna
// let {name,Address} = student; 
// console.log(name,Address);
// let {name: userName, Address: userAddress} = student;
// console.log(userName,userAddress);
// console.log(student);

// Questing is kyu lagana hai for loop jab vo ek baar me he saari values de rha hai.
// console.log(Object.keys(student));

// For of loop on object
// for(let keys of Object.keys(student)){
//     console.log(keys, student[keys]);
// }

// for(let val of Object.entries(student))
// {
//     console.log(val);
// }

// for(let [keys,values] of Object.entries(student)){

//     console.log(keys, values);
// }

// console.log(Object.keys(student)); it returns keys in array form

// How to create function in object
// let student = {
//     name: "Deepanshu",
//     course: "BCA",
//     "Roll No": 21,
//     Address: "Rasulpur Aurangabad Meerut",
//     func: function(){
//         console.log(`Hello world!`);
//     }
// };

// student.func();

// let student = {
//     name: "Deepanshu",
//     course: "BCA",
//     Address: {
//         city: "Meerut",
//         village: "Aurangabad",
//     }
    
// };

// console.log(student.Address.city);
// let copyy = student;  shallow copy
// copyy.name = "vishal";

// let copyy = structuredClone(student); Deep copy

// copyy.name = 'vishal';

// copyy.Address.city = "noida";
// console.log(copyy);
// console.log(student);

let student = {
    name: "Deepanshu",
    course: "BCA",
    0: 10,
    10: 100,
    
};

console.log(student[0]);