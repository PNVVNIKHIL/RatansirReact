import { useState } from "react";

function Cart()
{


    const originalPrice = 7899;

   
    const [discount,setDiscount] = useState(0);

    const discount10 = () => {
        setDiscount(originalPrice*0.1);
    }
    const discount20 = () => {
        setDiscount(originalPrice*0.2);
    }

    const discount30 = () => {
        setDiscount(originalPrice*0.3);
    }
    return(
        <>
        <h1>Original Price: ${originalPrice}</h1>
        <h3>Discounted Price: ${discount}</h3>
        <h2>Price After Discount: ${originalPrice - discount}</h2>
        <p>Click a button to apply the discount</p>
        <button style={{color:"green"}} onClick={discount10}>Apply 10% Discount</button>
        <button style={{color:"orange"}} onClick={discount20}>Apply 20% Discount</button>
        <button style={{color:"grey"}} onClick={discount30}>Apply 30% Discount</button>
        <button style={{ color: "white" }} onClick={() => setDiscount(0)}>Reset Price</button>

        </>
    );
}
export default Cart;