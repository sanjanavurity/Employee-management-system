// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
//import ProjectList from './ProjectList';
//import Profile from './Profile';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Use the Sidebar component */}
      <div className="content">
        <div className="main-content">
          {/*<Profile />*/}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
