import './App.css'; // Importing CSS for styling
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './pages/AddEmployee';
import DeleteEmployee from './pages/DeleteEmployee';
import HomePage from './pages/HomePage';
import UpdateEmployee from './pages/UpdateEmployee';
import ViewEmployee from './pages/ViewEmployee';
import ViewAllEmployee from './pages/ViewAllEmployee';


const App=()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/delete" element={<DeleteEmployee />} />
        <Route path="/view" element={<ViewEmployee />} />
        <Route path="/update" element={<UpdateEmployee />} />
        <Route path="/" element={<ViewEmployee />} />
        <Route path="/view-all-employees" element={<ViewAllEmployee />} />
      </Routes>
    </Router>
  );
}

export default App; // Exporting App component
