import React from 'react';
import '../styles/Button.css';


const Button = ({ onClick, children, className = '', disabled = false }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
