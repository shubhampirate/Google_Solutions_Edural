import React from 'react';

const Card = ({ title, content, imageUrl }) => {
  return (
    <div
      sx={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        marginBottom: '20px',
        width: '300px',
        boxSizing: 'border-box',
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        sx={{
          width: '100%',
          borderRadius: '8px',
          marginBottom: '12px',
        }}
      />
      <h2 sx={{ fontSize: '1.2em', marginBottom: '8px' }}>{title}</h2>
      <p sx={{ fontSize: '1em', color: '#666' }}>{content}</p>
    </div>
  );
};

export default Card;
