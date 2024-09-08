import React from 'react';
import '../styles/Button.css'; // Optional: For button-specific styles

const Button = ({ label, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
