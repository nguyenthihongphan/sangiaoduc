import React, { useState,useEffect } from 'react' 
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [menu,setMenu] = useState("course")
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [])
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 py-2 sticky-top shadow-sm">     <div className="container-fluid d-flex justify-content-between align-items-center">
      <div className="nav-logo">
          <img src={logo} alt="" style={{ width: 80, height: 80 }} />
      </div>
        <button
        className="navbar-toggler d-lg-none"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars />
      </button>
      <div className={`navbar-collapse ${isMenuOpen ? "show d-block" : "d-none d-lg-flex"}`}id="navbarNav">          
        <ul className="navbar-nav nav-menu ms-auto gap-3">
          <li onClick={()=>{setMenu("course")}} className="nav-item">
            <Link className={`nav-link nav-link-animate ${menu==="course"?"active":""}`} aria-current="page" to='/'>Khóa học</Link>
          </li>
          <li onClick={()=>{setMenu("class")}} className="nav-item">
            <Link className={`nav-link nav-link-animate ${menu==="class"?"active":""}`} to='/class'>Lớp học</Link>
          </li>
          <li onClick={()=>{setMenu("community")}} className="nav-item">
            <Link className={`nav-link nav-link-animate ${menu==="community"?"active":""}`} to='community'>Tin tức</Link>
          </li>
          <li onClick={()=>{setMenu("teacher")}} className="nav-item">
            <Link className={`nav-link nav-link-animate ${menu==="teacher"?"active":""}`} to='teacher'>Giảng Viên</Link>
          </li>
          <li onClick={()=>{setMenu("about")}} className="nav-item">
            <Link className={`nav-link nav-link-animate ${menu==="about"?"active":""}`} to='about'>Về chúng tôi</Link>
          </li>
          <li onClick={()=>{setMenu("productLiked")}} className="nav-item">
            <Link className={`nav-link nav-link-animate ${menu==="productLiked"?"active":""}`} to='productLiked'>Yêu thích</Link>
          </li>
          {user ? (
      <div className="d-flex align-items-center gap-2">
        <span className="text-success fw-bold">{user.name}</span>
        <button className="btn btn-sm btn-outline-danger" onClick={() => {
          localStorage.removeItem("user");
          setUser(null);
          navigate("/login");
        }}>
          Đăng xuất
        </button>
      </div>
        ) : (
          <>
            <button type='button' className='btn1' onClick={() => navigate("/Login")}>Login</button>
                  {/* <button type='button' className='btn2' onClick={() => navigate("/loginSignup")}>Logup</button> */}
                </>
        )}    
        </ul>
    </div>
  </div>
  </nav>
  )
}
export default Navbar