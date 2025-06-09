import React from 'react';

export default function MediaWindow({ platform }) {
  const bgColor = platform ? platform.color : '#333';
  const label = platform ? \`\${platform.name} Content Preview\` : 'Select a platform to preview media';

  return (
    <div
      style={{
        height: '400px',
        borderRadius: '12px',
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        color: 'white',
        boxShadow: '0 0 20px rgba(0,0,0,0.5)'
      }}
    >
      {label}
    </div>
  );
}
