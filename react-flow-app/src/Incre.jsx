import { useState } from "react";

function Incre()
{
    const [count,setCount] = useState(0);
        

    return(
        <>
        <h1>Counter value {count} </h1>
        <button style={{color:"green"}} onClick={() =>{setCount(count+1)}}>Increment</button>
        
        
        </>
    )
}
export default Incre;