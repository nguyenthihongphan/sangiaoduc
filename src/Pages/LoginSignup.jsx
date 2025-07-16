import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/LoginSignup.css';

export const LoginSignup = () => {
  return (
  <div className='loginSignup container d-flex justify-content-center align-items-center' style={{ minHeight: "100vh" }}>
  <div className="loginSignup-container w-100 shadow-lg bg-white rounded p-4 mt-5" style={{ maxWidth: "600px" }}>
    <h1 className='text-center mt-3 mb-4'>Đăng ký</h1>
    <div className="loginSignup-fields">
      <div className="row gx-3">
        <div className="col-md-6 mb-3">
          <input className='form-control' type="text" placeholder='Họ và Tên' />
        </div>
        <div className="col-md-6 mb-3">
          <input className='form-control' type="text" placeholder='Số điện thoại' />
        </div>
        <div className="col-md-6 mb-3">
          <input type="text" className='form-control' placeholder='Email' />
        </div>
        <div className="col-md-6 mb-3">
          <input type="password" className='form-control' placeholder='Mật khẩu' />
        </div>
      </div>
    </div>
    <div className="text-center mt-3">
        <button className="btn btn-danger w-100 mb-2">Đăng ký</button>
        <p className="login mb-0">
            Bạn có tài khoản?
            <Link to="/login" className="text-danger">Đăng nhập</Link>
        </p>
    </div>
  </div>
  </div>
  )
}
