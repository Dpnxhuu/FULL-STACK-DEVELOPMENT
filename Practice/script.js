// let a = '1' + 2 + 3;
// console.log(a)

// const original = [1, 2, {name: "Raj", age: 25}];
// const shallowCopy = [...original];

// shallowCopy[2].name = "Priya";

// // console.log(shallowCopy);
// console.log(original[2].name);  // "Priya" 

//Best and recommended method to create deep copy from an array -->
// const original = [1, 2, {name: "Raj", items: [1, 2, 3]}];
// const deepCopy = structuredClone(original);

// deepCopy[2].name = "Priya";
// deepCopy[2].items.push(4);
// console.log(original);  // "Raj" - Original safe hai! ✅
// console.log(deepCopy);

// Second method of creating deep copy of an array --->

// const original = [1, 2, {name: "Raj", items: [10, 20]}];
// const deepCopy = JSON.parse(JSON.stringify(original));

// // Nested object change karo
// deepCopy[2].name = "Priya";
// deepCopy[2].items[0] = 999;

// console.log(original);     
// console.log(deepCopy); 



//Note: we can also store function in an array in js 
// const arr = [
//     10,
//     20,
//     function () {
//         console.log("Hello Bhai 🔥");
//     }
// ];

// arr[2]();  // Hello Bhai 🔥

// const operations = [
//   (a, b) => a + b,
//   (a, b) => a * b
// ];

// console.log(operations[0](4, 5)); // 20



// issuee

// const original = [1, 2, function() { return "hello"; }];
// const copy = JSON.parse(JSON.stringify(original));

// console.log(copy); // [1, 2, null] - Function lost! 

// const obj = {a: 1, b: undefined, c: 3};
// const copy = JSON.parse(JSON.stringify(obj));

// console.log(copy); // {a: 1, c: 3} - 'b' gayab! 😱

// const nums = [1, Infinity, NaN, -Infinity];
// const copy = JSON.parse(JSON.stringify(nums));

// console.log(copy); // [1, null, null, null] 😱

// function User(username, email, password){
//     return {
//         username: username,
//         email: email,
//         password: password,
//      }
// }

// let user1 = new User("Dpnshuu",'dpnshuu@gmail.com',123);
// console.log(user1);

// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
// }

// let user1 = new User("Deepanshu",'dpnshuu@gmail.com',1234);
// console.log(user1);

// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
// }

// let user1 = new User("Deepanshu",'dpnshuu@gmail.com',1234);

// console.log(user1 instanceof User);  // ✅ true
// console.log(Object.getPrototypeOf(user1)); // User.prototype

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

let user1 = new User("Dpnshuu",'dpnshuu@gmail.com',123);

console.log(user1 instanceof User);  // ✅ true
console.log(user1.constructor.name); // "User"