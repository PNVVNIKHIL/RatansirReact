// import { useRef, useState } from "react";

import { useRef } from "react";

// function App() {
//   const num1Ref = useRef(null);
//   const num2Ref = useRef(null);
//   const resRef = useRef(null);
//   const operation = useRef(null); 

//   const handleCalculate = () => {
//     const num1 = parseFloat(num1Ref.current.value) || 0;
//     const num2 = parseFloat(num2Ref.current.value) || 0;
//     const op = operation.current.value;
//     let result = 0;

//     switch (op) {
//       case "sum":
//         result = num1 + num2;
//         break;
//       case "sub":
//         result = num1 - num2;
//         break;
//       case "mul":
//         result = num1 * num2;
//         break;
//       case "div":
//         result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
//         break;
//       default:
//         result = "Invalid operation";
//     }
//     resRef.current.value = result;
//   };

//   return (
//     <>
//       <h2>Calculator</h2>
//       <input ref={num1Ref} type="number" placeholder="Enter 1st value" />
//       <input ref={num2Ref} type="number" placeholder="Enter 2nd value" />

//       <select  ref={operation}>
//         <option value="sum">Addition</option>
//         <option value="sub">Subtraction</option>
//         <option value="mul">Multiplication</option>
//         <option value="div">Division</option>
//       </select>

//       <button onClick={handleCalculate}>Calculate</button>
//       <input ref={resRef} type="text" placeholder="Result" readOnly />
//     </>
//   );
// }

// export default App;

// function App()
// {
//     const userName = useRef(null);
//     const passWord = useRef(null);

//     const check = () =>
//         {
//           const  name = userName.current.value;
//          const   pass = passWord.current.value;

//             if(name == "Ratan" && pass == "Ratan123")
//                 alert("Login Successful");
//             else
//             {
//                 alert("Invalid");
//             }
//         } 

//     return(
//         <>
//         <input ref={userName} type="text" placeholder="Enter username"/>
//         <input ref={passWord} type="password" placeholder="Enter password"/>
//         <button onClick={check}>Login</button>

//         </>
//     )

// }
// export default App

// function App()
// {
//     const social = useRef(null);
//     const science = useRef(null);

//     const sum = () => {
//         const so = social.current.value;
//         const s =  science.current.value;


//     }
// }'


function App()
{
  const maths = useRef(null);
  const science  =useRef(null);
  const social = useRef(null);
  const result = useRef(null);
  
  const average = ()=>
  {
    const m = parseFloat(maths.current.value);
    const sc = parseFloat(science.current.value);
    const so = parseFloat(social.current.value);
    const average1 = (m+sc+so)/3;

    result.current.value = average1;
  }

  return(
    <>
      <h1>Average</h1>
      <input ref={maths} type="number" placeholder="Enter the maths"/>
      <input ref={science} type="number" placeholder="Enter the science"/>
      <input ref={social} type="number" placeholder="Enter the social"/>
      <button onClick={average}>Average</button>
      <input ref={result} type="number" readOnly/>
    </>
  )
}

export default App;