import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import AdminDashboard from './components/adminDashboard';
import Appliedlist from './components/AppliedList';
import ProjectApplicationForm from './components/ProjectApplicationForm';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/projectlist" element={<ProjectList />} /> 
        <Route path="/auth/appliedlist" element={<Appliedlist />} /> 
        <Route path="/auth/login" element={<Login />} /> 
        <Route path="/" element={<Login />} />
        <Route path="/auth/dashboard" element={<Dashboard />} />
        <Route path="/auth/adminDashboard" element={<AdminDashboard />} />
        <Route path="/auth/employee-list" element={<EmployeeList />} />
        <Route path="/auth/sidebar" element={<Sidebar />} />
        <Route path="/auth/ProjectApplicationForm/:projectId" element={<ProjectApplicationForm />} />
        <Route path="/auth/topbar" element={<Topbar />} />
        <Route path="/auth/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;