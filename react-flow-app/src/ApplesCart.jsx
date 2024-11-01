import { useState } from "react";

function ApplesCart()
{
    const [apples,setapples] = useState(0);
    
    return(
        <>
            <h1>No of Apples {apples}</h1>
            {apples===0 ?(
                <p>No Apples left!</p>
            ):
                <p>Great! you have apples</p>}

            <button style={{color:"green"}} onClick={() => {setapples(apples+1)}}>Add 1 Apple</button>
            <button style={{color:"red"}} onClick={()=>{apples>0 && setapples(apples-1)}}>Remove 1 Apple</button>
            <button style ={{color:"white"}} onClick={()=>{setapples(0)}} >Reset 0</button>
        </>
    );
}

export default ApplesCart;