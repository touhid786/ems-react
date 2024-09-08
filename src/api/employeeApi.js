// src/api/employeeApi.js
import axios from 'axios';

const BASE_URL = 'http://employee-managment-system.ap-south-1.elasticbeanstalk.com/employees';

/**
 * Fetch all employees.
 * @returns {Promise<Array>} An array of employees.
 */
export const getAllEmployees = async () => {
    try {
        const response = await axios.get(BASE_URL);
        console.log('Response data:', response.data);
        return response.data.data || response.data; // Adjust based on the actual structure of the API response
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error; // Re-throw error to handle it in the component
    }
};

/**
 * Fetch a single employee by ID.
 * @param {number} id - Employee ID.
 * @returns {Promise<Object>} The employee data.
 */
export const getEmployeeById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        console.log(`getEmployeeById (${id}) response:`, response.data);
        return response.data.data || response.data; // Adjust based on the actual structure of the API response
    } catch (error) {
        console.error(`Error fetching employee with ID ${id}:`, error);
        throw error; // Re-throw error to handle it in the component
    }
};

/**
 * Add a new employee.
 * @param {Object} employeeData - The employee data to be added.
 * @returns {Promise<Object>} The added employee data.
 */
export const addEmployee = async (employeeData) => {
    try {
        const response = await axios.post(BASE_URL, employeeData);
        console.log('Full API response:', response.data);
        return response.data.data || response.data; // Adjust based on the actual structure of the API response
    } catch (error) {
        console.error('Error adding employee:', error);
        throw error; // Re-throw error to handle it in the component
    }
};

/**
 * Update an existing employee by ID.
 * @param {number} id - Employee ID.
 * @param {Object} employeeData - Employee data to update.
 * @returns {Promise<Object>} The updated employee data.
 */
export const updateEmployeeById = async (id, employeeData) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, employeeData);
        console.log(`updateEmployeeById (${id}) response:`, response.data);
        return response.data.data || response.data; // Adjust based on the actual structure of the API response
    } catch (error) {
        console.error(`Error updating employee with ID ${id}:`, error);
        throw error; // Re-throw error to handle it in the component
    }
};

/**
 * Delete an employee by ID.
 * @param {number} id - Employee ID.
 * @returns {Promise<void>}
 */
export const deleteEmployeeById = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
        console.log(`Successfully deleted employee with ID ${id}`);
    } catch (error) {
        console.error(`Error deleting employee with ID ${id}:`, error);
        throw error; // Re-throw error to handle it in the component
    }
};
