import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Optional, for styling

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',  // 'attendee' or 'host'
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, you would authenticate with the backend here
    if (formData.role === 'attendee') {
      navigate('/attend');  // Navigate to the Attendee page
    } else if (formData.role === 'host') {
      navigate('/host');  // Navigate to the Host page
    } else {
      alert('Please select a valid role.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login to eventSphere</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="attendee">Attendee</option>
              <option value="host">Host</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
