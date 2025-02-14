// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/auth/employee-list" className="active">
        <span className="fs-5 fw-bolder">Purpleplum</span>
      </Link>
      <Link to="/auth/employee-list">EmployeeList</Link>
        <Link to="/auth/projectlist">Apply</Link>
        <Link to="/auth/Profile">Profile</Link>
        <Link to="/auth/login">Logout</Link>
    </div>
  );
};

export default Sidebar;