import React from "react";

const Sum = React.memo(({num}) =>{
     function calculateSum(){
        let sum = 0;
        for(let n = 1; n <= num; n++){
            sum = sum+n;
        }
        return sum;
    }
    console.log("sum wala function")

    let total = calculateSum()
    
    return(
        <>
        <p>Sum: {total} </p>
        </>
    )
})

export default Sum;