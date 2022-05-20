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
      className='login-body'
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1 className='title'>Đăng nhập</h1>
      <form>
        <label className="label">Địa chỉ Email</label>
        <input
          value={email}
          onChange={e => updateFormData(e)}
          placeholder="Email"
          type="email"
          name="email"
          required
        />
        <label className="label">Mật khẩu</label>
        <input
          value={password}
          onChange={e => updateFormData(e)}
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <a className='forgetPass' href="#">Quên mật khẩu</a>
        <div style={{ textAlign: 'center' }}>
          <button type="submit">Đăng nhập</button>
          <p>Chưa có tài khoản? <span><a className='register' href="/signup">Click vào đây</a></span> để đăng ký.</p>
        </div>

      </form>
    </div>
  );
};

export default Login;