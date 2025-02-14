// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProjectApplicationForm.css';

const ProjectApplicationForm = () => {
  const { projectId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('reason', formData.reason);
    data.append('resume', formData.resume);
    data.append('projectId', projectId);

    try {
      await axios.post('/api/apply', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Application submitted successfully');
    } catch (error) {
      alert('Error submitting application');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="application-form">
      <h2>Apply for Project {projectId}</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="reason">Reason:</label>
        <textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="resume">Upload Resume:</label>
        <input
          type="file"
          id="resume"
          name="resume"
          onChange={handleFileChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectApplicationForm;