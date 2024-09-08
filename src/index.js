import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing global CSS
import App from './App'; // Importing the main App component

// Creating the root and rendering the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

