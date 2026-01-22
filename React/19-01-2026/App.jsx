import { useState } from "react";

function App(){
  let [count, setCount] = useState(0);

  function increment(){
    count++;
    setCount(count);
  }

  return(
    <>
    <h1>Count: {count}</h1>
    <button onClick={increment}>increment</button>
    </>
  )
}



export default App;