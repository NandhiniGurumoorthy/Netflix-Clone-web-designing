import React, { useState } from 'react'
import './Nandhini.css';

// const Content = (a)=>{
//   const Header =()=>{
//     return(
//       <h1>NAAGA THA NAMBA THA</h1>
//     )
//   }

// return (
//   <div>
//     <h1>My name is {a.name}</h1>
//     <h1>My age is {Header}</h1>
//   </div>
//   );
// }
// export default Content;

const Content = ()=>{
  const[name,setName]=useState('red')
  function lights()
  {
  const colors=["red","yellow","green"]
    const a=[Math.floor(Math.random()*3)]
    return setName(colors[a])
  }
  return(
    <div>
       <h1>traffic signal is {name}</h1>
       <button onClick={lights}>click</button>
    </div>
  )

}

export default Content 