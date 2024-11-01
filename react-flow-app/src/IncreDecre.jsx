import { useState } from "react";

function IncreDecre()
{
    const [count,setCount] = useState(0);

    const IncrementClick = () => {
        setCount(count+1);
    }
    const DecrementClick = () => {
        setCount(count-1);
    }

    return(
        <>
            <h1>This is Counter Value {count}</h1>
            <button style={{color:"green"}} onClick={IncrementClick}>Increment</button>
            <button style={{color:"red"}} onClick={DecrementClick}>Decrement</button>
        </>
    );
}
export default IncreDecre;