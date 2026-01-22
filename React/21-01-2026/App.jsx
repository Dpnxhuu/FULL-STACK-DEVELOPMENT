import { useState } from "react";

function App() {
const [count, setCount] = useState(['A','B','C']);


function countChange(){
    setCount(['D',...count]);
}

return (
  <>
  <h1>{count}</h1>
  <button onClick={countChange}>Check</button>
  </>
)

}

export default App;