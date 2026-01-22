import { useState } from "react";
import Sum from './Sum.jsx';
import { useMemo } from "react";
import { useCallback } from "react";

function App() {
    const [count,setCount] = useState(0);

    // console.log("app");

    //useMemo is used to memoize the component(value) to avoid re rendering of the component when props are not changed.
    // let factorial = useMemo(() => {
    //     console.log("factorial wala function");
    //     function calculateFactorial(){
    //         let fact = 1;
    //         for(let i = 1; i <= count; i++){
    //             fact = fact * i;
    //         }
    //         return fact;
    //     }
    //     return calculateFactorial();
    // }, [count]);

    //useCallBack is used to memoize the function to avoid re creation of the function when props are not changed.
    // let useHandle = useCallback(() => {
    //     console.log("use callback function"); 
    // }, [count]);

    return(
      <>
      <button onClick={() => setCount(count+1)}>Count: {count}</button>
      <Sum num = {count}></Sum>
      </>
    )

}

export default App;

