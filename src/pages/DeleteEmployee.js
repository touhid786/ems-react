import React, { useState } from 'react';
import { deleteEmployeeById } from '../api/employeeApi'; // Import the API method
import '../styles/DeleteEmployee.css'; // Import the CSS for form styling

const DeleteEmployee = () => {
  const [id, setId] = useState('');
  const [error, setError] = useState(null); // State to handle errors
  const [success, setSuccess] = useState(''); // State to handle success messages

  const handleInputChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await deleteEmployeeById(id);
      setSuccess(`Employee with ID ${id} has been successfully deleted.`);
      setError(null); // Clear any previous errors
    } catch (error) {
      setSuccess('');
      setError('Error deleting employee.'); // Set error message
    }
  };

  return (
    <div className="form-container">
      <h2>Delete Employee</h2>
      <form onSubmit={handleSubmit}>
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
          Delete
        </button>
      </form>

      {/* Display success message if any */}
      {success && <p className="success-message">{success}</p>}

      {/* Display error message if any */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default DeleteEmployee;
