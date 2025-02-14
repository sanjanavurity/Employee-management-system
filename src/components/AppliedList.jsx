// eslint-disable-next-line no-unused-vars
import React from 'react';
import './EmployeeList.css';


const AppliedList = () => {
  

  const employees = [
    { id: 1, name: 'John Doe', title: 'Software Engineer', code: 'EMP001', date: '2022-01-15', email: 'john@example.com', status: 'Active', img: 'profile1.jpg' },
    { id: 2, name: 'Jane Smith', title: 'Project Manager', code: 'EMP002', date: '2021-12-20', email: 'jane@example.com', status: 'Inactive', img: 'profile2.jpg' },
    { id: 3, name: 'Alice Johnson', title: 'UX Designer', code: 'EMP003', date: '2020-03-10', email: 'alice@example.com', status: 'Active', img: 'profile3.jpg' },
    { id: 4, name: 'Bob Brown', title: 'Data Analyst', code: 'EMP004', date: '2019-08-23', email: 'bob@example.com', status: 'Active', img: 'profile4.jpg' },
    { id: 5, name: 'Carol White', title: 'HR Manager', code: 'EMP005', date: '2021-05-05', email: 'carol@example.com', status: 'Inactive', img: 'profile5.jpg' },
    { id: 6, name: 'David Black', title: 'DevOps Engineer', code: 'EMP006', date: '2018-12-12', email: 'david@example.com', status: 'Active', img: 'profile6.jpg' },
    { id: 7, name: 'Eva Green', title: 'QA Engineer', code: 'EMP007', date: '2020-07-14', email: 'eva@example.com', status: 'Active', img: 'profile7.jpg' },
    { id: 8, name: 'Frank Blue', title: 'Product Owner', code: 'EMP008', date: '2017-11-30', email: 'frank@example.com', status: 'Inactive', img: 'profile8.jpg' },
    { id: 9, name: 'Grace Red', title: 'Scrum Master', code: 'EMP009', date: '2019-04-21', email: 'grace@example.com', status: 'Active', img: 'profile9.jpg' },
    { id: 10, name: 'Hank Yellow', title: 'Frontend Developer', code: 'EMP010', date: '2021-01-09', email: 'hank@example.com', status: 'Active', img: 'profile10.jpg' },
    { id: 11, name: 'Ivy Orange', title: 'Backend Developer', code: 'EMP011', date: '2016-09-19', email: 'ivy@example.com', status: 'Inactive', img: 'profile11.jpg' },
    { id: 12, name: 'Jack Purple', title: 'Database Administrator', code: 'EMP012', date: '2018-03-27', email: 'jack@example.com', status: 'Active', img: 'profile12.jpg' },
  ];
  
  return (
    <div className="employee-list-container">
      <div className="employee-list-content">
        <div className="employee-grid">
          {employees.map(employee => (
            <div key={employee.id} className="employee-card">
              <img src={employee.img} alt={employee.name} className="profile-pic" />
              <h3>{employee.name}</h3>
              <p><strong>Title:</strong> {employee.title}</p>
              <p><strong>Code:</strong> {employee.code}</p>
              <p><strong>Joining Date:</strong> {employee.date}</p>
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Status:</strong> {employee.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedList;