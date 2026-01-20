import { useState,useEffect } from "react";

function App() {
  let [users, setUser] = useState([]);
  let [count,setCount] = useState(30);

  useEffect(()=>{
    async function profile() {
    let response = await fetch(`https://api.github.com/users?per_page= ${count}`);
    let data = await response.json();
    setUser(data);
    // console.log("hello");
  }
  profile();

  },[count])

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Github users</h1>
      <input placeholder="Enter users value" type="number" value = {count} onChange={(e) => { return setCount(e.target.value)}  }></input>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }} >

        {users.map((user) => (
          <img key={user.id} src={user.avatar_url} alt="github user"></img>
        ))}

      </div>
    </>
  );
}

// Working of useState hook

// function App(){
//   let [count,setCount] = useState(30);

//   function likho(){
//     let nums = [1,2,3,4,5,6];
//     setCount(nums);
//   }
//   console.log(count);

//   return(
//     <>
//     <input id="newEle" type="number" placeholder="Enter kro"></input>
//     <button onClick={likho}>Button</button> 
//     </>
//   )
// }
export default App;
