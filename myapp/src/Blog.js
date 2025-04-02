import React from 'react';
import './Blog.css'; // Importing external CSS file

// Functional Component
const Blog = () => {
  // Static blog details
  const title = "10 Tips for Effective Time Management";
  const author = "John Doe";
  const description = "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";
  const image = "https://www.invensislearning.com/blog/wp-content/uploads/2020/09/Time-management-strategies-for-Project-Managers-1068x552-1.jpg";

  // Inline Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '20px auto',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const authorStyle = {
    fontSize: '16px',
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '15px',
  };

  const descriptionStyle = {
    fontSize: '18px',
    color: '#666',
    textAlign: 'center',
  };

  // JSX Render
  return (
    <div style={containerStyle}>
      <img src={image} alt="Blog Thumbnail" className="blog-image" />
      <h2 style={titleStyle}>{title}</h2>
      <p style={authorStyle}>By: {author}</p>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default Blog;
