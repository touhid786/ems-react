    // src/components/EmployeeList.js
import React, { useEffect, useState } from 'react';
import { getAllEmployees } from '../api/employeeApi'; // Import the API function
import '../styles/EmployeeList.css'; // Import the CSS for styling

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]); // State to hold employee data
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const employeeData = await getAllEmployees(); // Fetch employee data
                setEmployees(employeeData); // Set employee data to state
            } catch (err) {
                setError('Failed to fetch employee data'); // Set error message
            }
        };

        fetchEmployees(); // Fetch employees when component mounts
    }, []);

    return (
        <div>
            <h1>Employee List</h1>
            {error ? (
                <p className="error">{error}</p>
            ) : (
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>${employee.salary.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default EmployeeList;
