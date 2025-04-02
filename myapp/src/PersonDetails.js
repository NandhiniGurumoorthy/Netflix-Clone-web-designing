import React from 'react';

// Sample data
const personsData = [
  { name: "John Doe", dateOfBirth: "1990-01-15" },
  { name: "Jane Smith", dateOfBirth: "1985-05-20" },
  { name: "Alice Johnson", dateOfBirth: "1995-09-10" },
];

// Function to calculate age based on the date of birth
const calculateAge = (dateOfBirth) => {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Adjust age if the birthday hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

// PersonDetails component
const PersonDetails = () => {
  return (
    <div>
      <h1>Person Details</h1>
      <ul>
        {personsData.map((person, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Date of Birth:</strong> {person.dateOfBirth}</p>
            <p><strong>Age:</strong> {calculateAge(person.dateOfBirth)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonDetails;
