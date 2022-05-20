import React, { useState } from 'react';
import '../styles/Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repassword: ""
    });
    const [validationMsg, setValidationMsg] = useState('');

    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const validateAll = () => {
        const msg = {};
        if (password !== repassword) {
            msg.repassword = "Password does not match!";
        }
        setValidationMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };

    const onSubmitLogin = () => {
        const isValid = validateAll();
        if (!isValid) return;
    };

    const { firstName, lastName, email, password, repassword } = formData;
    return (
        <div
            className='signup-body'
            style={{
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}
        >
            <h1 className='title'>Đăng ký</h1>
            <form>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row',
                    }}
                >
                    <div
                        style={{
                            marginRight: 20,
                        }}
                    >
                        <label className="label">Tên</label>
                        <input
                            value={firstName}
                            onChange={e => updateFormData(e)}
                            placeholder="Tên"
                            type="firstName"
                            name="firstName"
                            required
                        />
                    </div>
                    <div>
                        <label className="label">Họ</label>
                        <input
                            value={lastName}
                            onChange={e => updateFormData(e)}
                            placeholder="Họ"
                            type="lastName"
                            name="lastName"
                            required
                        />
                    </div>

                </div>

                <label className="label">Địa chỉ Email</label>
                <input
                    value={email}
                    onChange={e => updateFormData(e)}
                    placeholder="Email"
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
                <label className="label">Nhập lại password</label>
                <input
                    value={repassword}
                    onChange={e => updateFormData(e)}
                    placeholder="Password"
                    type="password"
                    name="repassword"
                    required
                />
                <div className="text-danger">{validationMsg.repassword}</div>
                <div style={{ textAlign: 'center' }}>
                    <button type="submit" onClick={onSubmitLogin}>Đăng ký</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;