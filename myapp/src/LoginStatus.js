import React, { useState } from 'react';
import './loginstatus.css';
// LoginStatus Component
const LoginStatus = () => {
  // State variable to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Short-circuiting to display the login status */}
      {isLoggedIn && <h1>You are logged in</h1>}

      {/* Button to toggle the login status for demonstration */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
};

export default LoginStatus;
