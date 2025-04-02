
// import logo from './logo.svg';
// import'./App.css'
// import Footer from './Footer';
// import Nandhini from './Nandhini';
// import './Nandhini.css';
// import Content from './Nandhini.js';
// import React from 'react'
// import {BrowserRouter as Router,Link,Routes, Route} from 'react-router-dom'
// import  About  from './About'
// import  Home  from './Home'
// import  Contact  from './Contact'
// import  SignIn  from './dashboard/Signin'
// import  Login  from './dashboard/Login'
// import  Register  from './dashboard/Register'

// const { useState } = require("react")

// function App ()  {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><Link to='/about'>About</Link></li>
//             <li><Link to='/home'>Home</Link></li>
//             <li><Link to='/contact'>Contact</Link></li>
//             <li><Link to='/signin'>SignIn</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/home' element={<Home/>}/>
//           <Route path='/contact' element={<Contact/>}/>
//           <Route path='/signin' element={<SignIn/>}/>
//           <Route path='/login' element={<Login/>}/>
//           <Route path='/register' element={<Register/>}/>
//         </Routes>
//       </div>
//       </Router>
//   )
// }
// export default App

// import React, { useState } from 'react';
// import Home from './Home'
// const App = () => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <div style={{ background: theme === 'light' ? 'white' : 'gray', color: theme === 'light' ? 'black' : 'white', }}>
   
//         <Home theme={theme}/>
//       <button onClick={toggleTheme}>Switch</button>
//     </div>
//   );
// }; 
// export default App;

// import React, { useRef, useState } from 'react';

// import React from 'react'

// const App = () => {
//   const [name,setName] = useState("")

  
//   console.log("running")
//   return (
//     <div>
//       <input type="text"  />
//       <button onClick={disp}>change</button>
//     </div>
//   )
// }
// export default App

// import React, { useState } from 'react';
// const App=()=>{
//   const[number, setNumber] = useState(0)
//   const[dark, setDark] = useState(false)
//   const a=useMemo(()=>{return slow(number)},[number])
//   const ab={
//     backgroundColor:dark?"black":"white",
//     color:dark?"white":"black"
//   }

// return(
//   <div>
//     <input type="number"
//     value={number}
//     onChange={(e)=>setNumber(e.target.value)}/>
//     <button onClick={()=>setDark((c)=>!c)}>click me</button>
//     <div style={ab}>{a}</div>
//   </div>
// )
// }
// function slow(a)
// { 
//   for( var i=0;i<100000;i++){}
//   return a*2
// }
// export default App

/* ASSIGNMENT DIGITAL LEARNING */
// R S1
// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }

// export default App;

// RS2

//ASSIGNMENT

//BLOG
// import React from 'react';
// import Blog from './Blog'; 

// function App() {
//   return (
//     <div>
//       <Blog />
//     </div>
//   );
// }

// export default App;

// CONTACT CARD
// src/App.js

// import React from 'react';
// import './App.css';
// import ContactCard from './ContactCard'; // Import ContactCard component

// // Sample contact data
// const contacts = [
//   {
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     phone: "555-1234",
//     address: "123 Maple Street, Springfield"
//   },
//   {
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     phone: "555-5678",
//     address: "456 Oak Avenue, Metropolis"
//   },
//   {
//     name: "Charlie Brown",
//     email: "charlie.brown@example.com",
//     phone: "555-8765",
//     address: "789 Pine Road, Gotham"
//   }
// ];

// // App Component
// function App() {
//   return (
//     <div className="App" style={{ display: 'flex', flexWrap: 'wrap' }}>
//       {contacts.map((contact, index) => (
//         <ContactCard
//           key={index}
//           name={contact.name}
//           email={contact.email}
//           phone={contact.phone}
//           address={contact.address}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

//User Information Management System

// App.js
// import React from 'react';
// import AllUsersComponent from './AllUsersComponent';  // Import the AllUsersComponent

// const App = () => {
//   return (
//     <div>
//       <AllUsersComponent />
//     </div>
//   );
// };

// export default App;

//TASK LIST
// import React from 'react';
// import TaskList from './TaskList'; // Import the TaskList component

// function App() {
//   return (
//     <div className="App">
//       <TaskList /> {/* Render the PersonDetails component */}
//     </div>
//   );
// }

// export default App;

//PERSONAL DETAILS
// import React from 'react';
// import PersonDetails from './PersonDetails'; 

// function App() {
//   return (
//     <div className="App">
//       <h1> Age Calculation</h1>
//       <PersonDetails /> {}
//     </div>
//   );
// }

// export default App;

//GREETINGS
// import React from 'react';
// import Greeting from './Greeting'; 

// function App() {
//   return (
//     <div className="App">
//       <h1>Greetings</h1>
//       <Greeting /> {}
//     </div>
//   );
// }

// export default App;

//LOGIN STATUS
// import React from 'react';
// import LoginStatus from './LoginStatus'; 

// function App() {
//   return (
//     <div className="App">
//       <h1>Login Status</h1>
//       <LoginStatus /> {}
//     </div>
//   );
// }

// export default App;


// USER MANAGEMENT
import React from 'react';
import AllUsersComponentManagement from './AllUsersComponentManagement';

const App = () => {
  return (
    <div>
      <h1>User Management</h1>
      <AllUsersComponentManagement />
    </div>
  );
};

export default App;


