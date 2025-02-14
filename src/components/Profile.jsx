// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import './Profile.css';
import './Sidebar';
import './Topbar';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import Sidebar from './Sidebar';
//import TopBar from './Topbar';

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

const ProfilePage = () => {
  const skillsData = {
    labels: ['JavaScript', 'React.js', 'HTML5/CSS3', 'Node.js'],
    datasets: [
      {
        label: 'Skill Level',
        data: [80, 70, 90, 60],
        backgroundColor: ['#6e8efb', '#a777e3', '#f4a261', '#2a9d8f'],
      },
    ],
  };

  const experienceData = {
    labels: ['ABC Tech (5 years)', 'XYZ Solutions (3 years)', 'Google (2 years)'],
    datasets: [
      {
        label: 'Years of Experience',
        data: [5, 3, 2],
        backgroundColor: ['#6e8efb', '#a777e3'],
      },
    ],
  };

  return (
    <>
    <Sidebar/>
      <div className="profile-header">
        <img src="profile.jpg" alt="John Doe" className="profile-pic" />
        <div className="profile-header-text">
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-designation">Software Engineer</p>
        </div>
      </div>
      <hr className="divider" />
      <div className="profile-section">
        <h2>About Me</h2>
        <p>
        Highly experienced software developer with a decade of expertise in designing, developing, and delivering high-quality software solutions. Proficient in a range of programming languages, including [list specific languages]. Proven track record of success in [specific areas of expertise, e.g. cloud computing, data analytics, etc.]. Skilled in Agile development methodologies and collaborative version control systems like Git. Strong understanding of software development lifecycles, with a focus on writing clean, efficient, and well-documented code. Excited to bring my expertise and passion for innovation to a new role and contribute to the success of the company.Feel free to customize it to fit your specific experience and style!
        </p>
      </div>
      <div className="profile-section">
        <h2>Skills</h2>
        <Bar data={skillsData} />
      </div>
      <div className="profile-section">
        <h2>Experience</h2>
        <Pie data={experienceData} />
      </div>
    </>
  );
};

export default ProfilePage;
