import React from 'react'

const About = ({theme}) => {
  const a={
    background: theme === 'light' ? 'white' : 'gray', 
    color: theme === 'light' ? 'black' : 'white'
  }
return(
 <div><h1 style={a}>About</h1></div>
)
}
export default About