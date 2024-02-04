import React from 'react';
import CustomButton from './CustomButton'; // Adjust the path based on your project structure

const Card = ({ title, content, imageUrl, buttonText }) => {
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
          width: '50px',
          height: '50px',
          borderRadius: '50%', // To make the image circular
          marginBottom: '12px',
        }}
      />
      <h2 sx={{ fontSize: '1.2em', marginBottom: '8px' }}>{title}</h2>
      <p sx={{ fontSize: '1em', color: '#666' }}>{content}</p>
      <CustomButton>{buttonText}</CustomButton>
    </div>
  );
};

export default Card;
