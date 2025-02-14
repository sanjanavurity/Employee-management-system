// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import AppliedList from './AppliedList';
//import Profile from './Profile'
import './Dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Link to="/auth/dashboard" className="active">
          <span className="fs-5 fw-bolder">Purpleplum</span>
        </Link>
        <Link to="/auth/appliedlist">AppliedList</Link>
        <Link to="/auth/login">Logout</Link>
      </div>
      <div className="content">
        <div className="header">
          <h4>Admin Employee Management System</h4>
        </div>
        <div className="main-content">
          <AppliedList/>
        <Outlet/>
          
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;