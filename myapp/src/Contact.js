import React from 'react'
import Vaada from './About'
const Contact = ({theme}) => {
  const a={
    background: theme === 'light' ? 'white' : 'gray', 
    color: theme === 'light' ? 'black' : 'white'
  }
return(
  <div>
    <h1 style={a}>Contact</h1>
    <Vaada theme={theme}/>
  </div>

)
}
export default Contact
