// import React, { useState } from "react";

// const CondRendering=() =>{
    //isLoggedIN--state variable
    //setIsLoggedIn--state function 
    //these both are used to check login status 
    // const[isLoggedIn, setIsLoggedIn]=useState(false);

    // const[hasMessages,sethasMessages]=useState(true);

    //short circuiting example
    // const showMessages=hasMessages && <p>you have one new message</p>

    // return(
    //     <div>
    //         <h1>Rect Conditional Rendering</h1>

            {/* applied ternary operator to implement conditional rendering */}
            // <h2>{isLoggedIn ? "Welcome Back" : "Please Login"}</h2>

            {/* this shows "you have new messages if "hasMessages is true" */}
            // {showMessages}

            // <p>{hasMessages || "No new messages"}</p>

            {/* button to check log in status */}
            // <button onClick={ ()=>setIsLoggedIn(!isLoggedIn)}>Toggle login status</button>

            // {/* Button to check the mesage status */}
            // <button onClick={ ()=>sethasMessages(!hasMessages)}>Toggle Message status</button>
        //</div>
//     )
// }
// export default CondRendering;
