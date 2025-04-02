import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Signin = () => {
  return (
    <div>
        <h1>Signin</h1>
    <nav>
        <ul>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/register">register</Link></li>

        </ul>
    </nav>
        <Outlet/>

    </div>
  )
}
export default Signin