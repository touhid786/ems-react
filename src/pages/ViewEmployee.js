// src/components/ViewEmployee.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { getEmployeeById } from '../api/employeeApi'; // Import the API method
import '../styles/ViewEmployee.css'; // Import the CSS for form styling

const ViewEmployee = () => {
  const [id, setId] = useState('');
  const [employee, setEmployee] = useState(null); // State to hold the employee data
  const [error, setError] = useState(null); // State to handle errors
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    setId(e.target.value);
  };

  const handleSingleView = async (e) => {
    e.preventDefault();
    try {
      // Fetch employee by ID
      const employeeData = await getEmployeeById(id);
      setEmployee(employeeData); // Set employee data in state
      setError(null); // Clear any previous errors
    } catch (error) {
      setEmployee(null); // Clear employee data in case of error
      setError('Error fetching employee data.'); // Set error message
    }
  };

  const handleViewAll = (e) => {
    e.preventDefault();
    // Navigate to the ViewAllEmployee page
    navigate('/view-all-employees');
  };

  return (
    <div className="form-container">
      <h2>View Employee</h2>
      <div className="view-options">
        <div className="view-single">
          <h3>View Single Employee</h3>
          <form onSubmit={handleSingleView}>
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={id}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="custom-button">
              View
            </button>
          </form>
        </div>
        <div className="view-all">
          <h3>View All Employees</h3>
          <button onClick={handleViewAll} className="custom-button view-all-button">
            View All
          </button>
        </div>
      </div>

      {/* Display employee details if available */}
      {employee && (
        <div className="employee-details">
          <h3>Employee Details</h3>
          <p><strong>ID:</strong> {employee.id}</p>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Salary:</strong> ${employee.salary}</p>
        </div>
      )}

      {/* Display error message if any */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ViewEmployee;
