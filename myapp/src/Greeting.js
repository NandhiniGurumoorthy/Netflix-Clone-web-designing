import React from 'react';


// Greeting component
const Greeting = () => {
  // Get the current hour using the Date object
  const currentHour = new Date().getHours();

  // Determine the greeting based on the current hour
  let greetingMessage;

  if (currentHour < 12) {
    greetingMessage = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "Good Afternoon";
  } else {
    greetingMessage = "Good Evening";
  }

  return (
    <div>
      <h1>{greetingMessage}</h1>
    </div>
  );
};

export default Greeting;
