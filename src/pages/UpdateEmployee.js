import React, { useState } from 'react';
import { getEmployeeById, updateEmployeeById } from '../api/employeeApi'; // Import the API methods
import '../styles/UpdateEmployee.css'; // Import the CSS for form styling

const UpdateEmployee = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    salary: '',
  });
  const [error, setError] = useState(null); // State to handle errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFetchEmployee = async () => {
    try {
      const employeeData = await getEmployeeById(formData.id);
      setFormData({
        id: employeeData.id, // Ensure ID is also set
        name: employeeData.name,
        email: employeeData.email, // Email should not be editable
        salary: employeeData.salary,
      });
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('Error fetching employee data.');
      console.error(error); // Log error for debugging
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedEmployee = await updateEmployeeById(formData.id, {
        name: formData.name,
        salary: formData.salary,
      });
      console.log(updatedEmployee);
      alert('Employee Updated:\n' + `ID: ${updatedEmployee.id}\nName: ${updatedEmployee.name}\nEmail: ${updatedEmployee.email}\nSalary: ${updatedEmployee.salary}`);
    } catch (error) {
      setError('Error updating employee data.');
      console.error(error); // Log error for debugging
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
          readOnly // Make email read-only
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

      {/* Display error message if any */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default UpdateEmployee;
