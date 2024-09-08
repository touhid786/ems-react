// src/components/AddEmployee.js
import React, { useState } from 'react';
import { addEmployee } from '../api/employeeApi';
import '../styles/AddEmployee.css';

/**
 * AddEmployee component for adding new employees to the system.
 * @returns {JSX.Element} The rendered form for adding an employee.
 */
const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    salary: '',
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedEmployee = await addEmployee(formData);
      console.log('Added Employee object:', addedEmployee); // Log the added employee object

      setSuccessMessage(`Employee added successfully:
        Name: ${addedEmployee.name}
        Email: ${addedEmployee.email}
        Salary: ${addedEmployee.salary}`);
      setError(null);
      setFormData({ name: '', email: '', salary: '' });
    } catch (error) {
      console.error('Error adding employee:', error);
      setError('Error adding employee. Please try again.');
      setSuccessMessage(null);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="salary">Salary:</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="custom-button">
          Submit
        </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddEmployee;
