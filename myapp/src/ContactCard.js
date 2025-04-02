// src/ContactCard.js

import React from 'react';

// ContactCard component
const ContactCard = ({ name, email, phone, address }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '250px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  };

  const headingStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const detailStyle = {
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
  };

  return (
    <div style={cardStyle}>
      <h2 style={headingStyle}>{name}</h2>
      <p style={detailStyle}><strong>Email:</strong> {email}</p>
      <p style={detailStyle}><strong>Phone:</strong> {phone}</p>
      <p style={detailStyle}><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default ContactCard;
