import React from 'react';

export default function PlatformButton({ name, color, logo, onClick, active }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border: 'none',
        padding: '15px 20px',
        fontSize: '1rem',
        borderRadius: '8px',
        color: 'white',
        cursor: 'pointer',
        opacity: active ? 1 : 0.7,
        transform: active ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.2s ease'
      }}
    >
      {logo} Connect to {name}
    </button>
  );
}
