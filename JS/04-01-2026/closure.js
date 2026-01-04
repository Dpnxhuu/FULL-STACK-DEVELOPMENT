const prompt = require('prompt-sync')();

// let a = 10;
// let str = "Hello";
// // console.log(typeof str)
// if(typeof str === "string")
// {
//     console.log(true);
// }


function myAccount(){

    let balance = 500;

    return {
    debit: function(amount)
    {
        if(typeof amount === "number"){
            balance-=amount;
            return balance;
        }
        else{
            return "please insert a number";
        }
        
    },
    credit: function(amount){
        if(typeof amount === "number"){
            balance+=amount;
            return balance;
        }
        else{
            return "please insert a number";
        }
        
    },
    getBalance: function(){
        return balance;
    }
}
}

let customer = myAccount();
console.log(customer.debit(200));
console.log(customer.credit(1000));
// console.log(customer.getBalance());