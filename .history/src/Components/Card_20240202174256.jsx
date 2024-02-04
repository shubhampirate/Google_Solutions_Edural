import React from 'react';

const Card = ({ title, content, imageUrl }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        marginBottom: '20px',
        width: '300px',
        boxSizing: 'border-box',
        textAlign: 'center', // Center-align the content
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        sx={{
          width: '5rem', height: '5rem', // Set the width and height of the image
          borderRadius: '50%', // To make the image circular
          marginBottom: '12px',
        }}
      />
      <h2 sx={{ fontSize: '1.2em', marginBottom: '8px' }}>{title}</h2>
      <p sx={{ fontSize: '1em', color: '#666' }}>{content}</p>
    </div>
  );
};

export default Card;
