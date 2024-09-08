import React, { useState } from 'react';
import { getEmployeeById, updateEmployeeById } from '../api/employeeApi';
import '../styles/UpdateEmployee.css';

const UpdateEmployee = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    salary: '',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // State for success message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFetchEmployee = async () => {
    try {
      const employeeData = await getEmployeeById(formData.id);
      setFormData({
        id: employeeData.id,
        name: employeeData.name,
        email: employeeData.email,
        salary: employeeData.salary,
      });
      setError(null);
      setSuccessMessage(null); // Clear any previous success message
    } catch (error) {
      setError('Error fetching employee data.');
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedEmployee = await updateEmployeeById(formData.id, {
        name: formData.name,
        email: formData.email,
        salary: formData.salary,
      });
      setSuccessMessage(`Employee Updated:
        ID: ${updatedEmployee.id}
        Name: ${updatedEmployee.name}
        Email: ${updatedEmployee.email}
        Salary: ${updatedEmployee.salary}`);
      setError(null);
    } catch (error) {
      setError('Error updating employee data.');
      console.error(error);
      setSuccessMessage(null); // Clear any previous success message
    }
  };

  return (
    <div className="form-container">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          required
        />
        <button
          type="button"
          onClick={handleFetchEmployee}
          className="custom-button"
        >
          Fetch Details
        </button>
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
          readOnly
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
          Update
        </button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default UpdateEmployee;
