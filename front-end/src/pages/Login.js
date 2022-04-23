import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { email, password } = formData;
  return (
    <div
      className='body-login'
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1 className='title'>Login</h1>
      <form>
        <label className="label">Email Address</label>
        <input
          value={email}
          onChange={e => updateFormData(e)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
        <label className="label">Password</label>
        <input
          value={password}
          onChange={e => updateFormData(e)}
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <a className='forgetPass' href="#">Forget Password</a>
        <div style={{ textAlign: 'center' }}>
          <button type="submit">Login</button>
          <p>Not registered? <span><a className='register' href="/signup">Click here</a></span> to register.</p>
        </div>

      </form>
    </div>
  );
};

export default Login;