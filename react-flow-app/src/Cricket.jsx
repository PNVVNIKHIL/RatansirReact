import { useState } from "react";

function Cricket()
{
    const [score,setScore] = useState(0);

    return(
        <>
        <h1>Cricket Score {score}</h1>
        <button style={{color:"green"}} onClick={() => {setScore(score+1)}}>+1</button>
        <button style={{color:"orange"}} onClick={() => {setScore(score+2)}}>+2</button>
        <button style={{color:"blue"}} onClick={() => {setScore(score+3)}}>+3</button>
        <button style={{color:"grey"}} onClick={() => {setScore(score+4)}}>+4</button>
        <button style={{color:"white"}} onClick={() => {setScore(score+6)}}>+6</button>
        <button style={{color:"wheat"}} onClick={() => {setScore(0)}}>Reset 0</button>
        </>
    )

}

export default Cricket;