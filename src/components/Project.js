import React from 'react';

const Project = ({ theme, title, description, children }) => (
  <div style={{
    backgroundColor: theme,
    padding: 24
  }}>
    <h2 style={{
      color: 'white',
      fontWeight: 600,
      fontSize: 30,
      lineHeight: '8px'
    }}>{title}</h2>
    <p style={{ 
      fontSize: 18, 
      color: 'rgba(255, 255, 255, 0.75)' 
    }}>{description}</p>
    {children}
  </div>
)

export default Project