// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './style.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
    username:'',
    password: ''
  });
  const [error, setError] = useState(null)
  const navigate = useNavigate(); // Use the useNavigate hook
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/auth/adminlogin', values)
      .then(result => {
        console.log(result.data.loginStatus);
        sessionStorage.setItem("role", result.data.role)
        if(result.data.loginStatus && result.data.role === 'employee'){
          navigate('/auth/Profile')
        } else if(result.data.loginStatus && result.data.role === 'admin'){
          navigate('/auth/adminDashboard')
        } else{
          setError(result.data.Error)
          //navigate('/auth/dashboard')
        }
        //navigate('/auth/dashboard');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className='text-warning'>
          {error && error}
        </div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <select className="role" name="role" required>
              <option value="" disabled selected>Select your role</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="username"
              autoComplete='off'
              onChange={(e) => setValues({...values, username: e.target.value})}
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              onChange={(e) => setValues({...values, password: e.target.value})}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit">Submit</button>
          <p className="forgot-password"><a href="#">Forgot Password?</a></p>
        </form>
      </div>
      <div className="signup-box">
        <h2>purpleplum.</h2>
        <img src="https://blog.bydrec.com/hubfs/The%20Importance%20of%20Each%20Phase%20of%20the%20System%20Development%20Life%20Cycle.jpg" alt="Image" />
        <div className="image-text">The function of good software is to make the complex appear to be simple</div>
      </div>
    </div>
  );
};

export default Login;