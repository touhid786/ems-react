// src/components/AddEmployee.js
import React, { useState } from 'react';
import { addEmployee } from '../api/employeeApi'; // Import the API function
import '../styles/AddEmployee.css'; // Import the CSS for form styling

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    salary: '',
  });
  const [error, setError] = useState(null); // State to handle errors
  const [successMessage, setSuccessMessage] = useState(null); // State to handle success messages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call API to add employee
      const addedEmployee = await addEmployee(formData);
      console.log('Employee added:', addedEmployee);
      setSuccessMessage(`Employee added successfully:\nName: ${addedEmployee.name}\nEmail: ${addedEmployee.email}\nSalary: ${addedEmployee.salary}`);
      setError(null); // Clear any previous errors
      setFormData({ name: '', email: '', salary: '' }); // Clear form data
    } catch (error) {
      console.error('Error adding employee:', error);
      setError('Error adding employee.');
      setSuccessMessage(null); // Clear success message in case of error
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
      {/* Display success message if available */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {/* Display error message if any */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddEmployee;
