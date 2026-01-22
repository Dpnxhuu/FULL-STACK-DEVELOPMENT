import { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [show,setShow] = useState(true);

    useEffect(() =>{
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    },[])

    return(
        <>
        <button onClick={()=> setShow(!show)}>{show?"hide":"show"}</button>
        {
            show&&<h1>Time: {time}</h1>
        }
        </>
    )
}

export default Clock;