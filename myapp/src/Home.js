import React from 'react'
import Contact from './Contact'
const Home = ({theme}) => {
  const a={
        background: theme === 'light' ? 'white' : 'gray', 
    color: theme === 'light' ? 'black' : 'white'
  }
return(
  <div>
    <h1 style={a}>Home</h1>
    <Contact theme={theme}/>
  </div>
)
}
export default Home