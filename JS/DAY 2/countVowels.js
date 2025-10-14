// function countVowels(str)
// {
//     let count = 0;
//     for(let char of str){
//         if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u")
//         {
//             count++;
//         }
//     }

//     return count;
// }

// let output = countVowels("Sana");

// console.log(output);

let countVowels = (str) => {
    let count = 0;
    for(let char of str){
        if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u")
        {
            count++;
        }
    }

    return count;
}

let vowelsAre = countVowels("aeiou");

console.log(vowelsAre);