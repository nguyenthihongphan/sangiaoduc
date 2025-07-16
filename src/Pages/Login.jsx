import React ,{useState} from 'react'
import { Link , useNavigate, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/LoginSignup.css';
import axios from "axios";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        // console.log("handleLogin được gọi");
    try {
      const res = await axios.get("http://localhost:8000/users", {
        params: {email,password}
      });
    if (res.data.length > 0) {
        const user = res.data[0];
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      } else {
        alert("Tài khoản hoặc mật khẩu không đúng");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
     <div className='loginSignup container d-flex justify-content-center align-items-center' style={{ minHeight: "100vh" }}>
      <div className="loginSignup-container w-100 shadow-lg bg-white rounded p-4 mb-4" style={{ maxWidth: "500px" }}>
        <h1 className='text-center mt-3 mb-4'>Đăng nhập</h1>
        <div className="loginSignup-fields">
          <div className="row gx-3">
            <div className="col-md-12 mb-3">
              <input type="text" className='form-control' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="col-md-12 mb-3">
              <input type="password" className='form-control' placeholder='Mật khẩu' onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
            <button type="submit" className="btn btn-danger w-100 mb-2" onClick={handleLogin}>Đăng nhập</button>
            <p className="login mb-0">
                Bạn chưa có tài khoản?{" "}
                <Link to='/loginSignup' className="text-danger">Đăng ký</Link>
            </p>
        </div>
      </div>
      </div>
  )
}
