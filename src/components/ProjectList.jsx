// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectList.css';
import './ProjectApplicationForm.jsx';
import Sidebar from './Sidebar';

const ProjectList = () => {
  const navigate = useNavigate();
  const projects = [
    { id: 1, name: 'AI Chatbot', description: 'Developing an AI-powered chatbot for customer service', lead: 'Alice', teamMembers: 5, deadline: '2024-08-01', budget: '$50,000', progress: 60, client: 'TechCorp' },
    { id: 2, name: 'E-commerce Platform', description: 'Building a scalable e-commerce platform for fashion products', lead: 'Bob', teamMembers: 8, deadline: '2024-09-15', budget: '$120,000', progress: 45, client: 'FashionHub' },
    { id: 3, name: 'Mobile Banking App', description: 'Creating a secure mobile banking app', lead: 'Charlie', teamMembers: 6, deadline: '2024-10-30', budget: '$75,000', progress: 30, client: 'FinancePlus' },
    { id: 4, name: 'Healthcare Portal', description: 'Developing a portal for managing healthcare records', lead: 'David', teamMembers: 7, deadline: '2024-11-20', budget: '$90,000', progress: 50, client: 'HealthFirst' },
    { id: 5, name: 'Education Platform', description: 'Creating an online platform for educational courses', lead: 'Eve', teamMembers: 10, deadline: '2024-12-10', budget: '$110,000', progress: 80, client: 'EduWorld' },
    { id: 6, name: 'Smart Home System', description: 'Developing a smart home automation system', lead: 'Frank', teamMembers: 4, deadline: '2024-08-20', budget: '$40,000', progress: 70, client: 'HomeTech' },
    { id: 7, name: 'Travel Booking App', description: 'Building an app for booking travel and accommodations', lead: 'Grace', teamMembers: 5, deadline: '2024-09-25', budget: '$60,000', progress: 55, client: 'TravelEase' },
    { id: 8, name: 'Fitness Tracker', description: 'Creating a wearable fitness tracking device and app', lead: 'Henry', teamMembers: 6, deadline: '2024-10-05', budget: '$80,000', progress: 40, client: 'FitLife' },
    { id: 9, name: 'Online Marketplace', description: 'Developing an online marketplace for local artisans', lead: 'Ivy', teamMembers: 7, deadline: '2024-11-15', budget: '$90,000', progress: 50, client: 'Crafty' },
    { id: 10, name: 'AR Education App', description: 'Creating an augmented reality app for education', lead: 'Jack', teamMembers: 8, deadline: '2024-12-05', budget: '$100,000', progress: 65, client: 'EduTech' }
  ];
  const handleApply = (projectId) => {
    navigate(`/auth/ProjectApplicationForm/${projectId}`);
  };

  return (
    <div className="project-list">
      <Sidebar/>
      <h2>Ongoing Projects</h2>
      <div className="project-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Lead:</strong> {project.lead}</p>
            <p><strong>Team Members:</strong> {project.teamMembers}</p>
            <p><strong>Deadline:</strong> {project.deadline}</p>
            <p><strong>Budget:</strong> {project.budget}</p>
            <p><strong>Client:</strong> {project.client}</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${project.progress}%` }}>{project.progress}%</div>
            </div>
            <button className="edit-btn" onClick={() => handleApply(project.id)}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;