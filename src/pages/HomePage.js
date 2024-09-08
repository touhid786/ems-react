import React from 'react';
import Button from '../components/Button';
import '../styles/Home.css'; // Import the CSS for homepage styling
import { useNavigate } from 'react-router-dom'; 

const HomePage = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = (path) => {
    navigate(path);
  };
  
  return (
    <div className="home">
      <div className="box-container">
        <h1 className="header">Employee Management System</h1>
        <div className="button-row">
          <Button label="Add Employee" onClick={() => handleButtonClick('/add')} />
          <Button label="Update Employee" onClick={() => handleButtonClick('/update')} />
        </div>
        <div className="button-row">
          <Button label="View Employees" onClick={() => handleButtonClick('/view')} />
          <Button label="Delete Employee" onClick={() => handleButtonClick('/delete')} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
