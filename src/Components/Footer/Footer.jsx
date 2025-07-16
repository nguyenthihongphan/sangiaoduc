import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import footer_logo from '../Assets/logo.png'
import ins_icon from '../Assets/instagram_icon.png'
import app from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer pt-4'>
       <div className="container">  
         <div className="row align-items-start">
            <div className="col-md-4 footer-contact mb-3">
        <h5>Liên hệ</h5>
        <span>Địa chỉ: Lê Đức Thọ Phường An Nhơn TPHCM</span><br />
        <span>Email: phannguyen2246@gmail.com</span>
        <p>SĐT: 0374389835</p>
        <h6>Chương trình đạo tạo</h6>
        <span> Khóa học lập trình website</span><br />
        <span>Khóa học lập trình fullstack</span><br />
        <span>Khóa học thiết kế web</span><br />
        <span>Khóa học Toiec 850+</span><br />
        <span>Khóa học Ielts 4 Kỹ năng</span><br />
      </div>
         <div className="col-md-4 text-center mb-3">
        <div className="footer-logo mb-2">
          <img src={footer_logo} width={60} alt="footer logo" />
        </div>
        <ul className="footer-links list-unstyled d-flex justify-content-center flex-wrap gap-3">
          <li>Home</li>
          <li>Company</li>
          <li>Product</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
         <div className="col-md-4 text-end footer-social-icon mb-3">
        <div className="d-flex justify-content-end gap-2">
          <div className="footer-icons-container">
            <img src={ins_icon} alt="Instagram" />
          </div>
          <div className="footer-icons-container">
            <img src={app} alt="App" />
          </div>
          <div className="footer-icons-container">
            <img src={ins_icon} alt="Instagram" />
          </div>
        </div>
        <div className="footer-question-form mt-4 mx-auto">
        <h6 className="mb-3">Bạn có thắc mắc? Gửi cho chúng tôi!</h6>
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="row g-2">
            <div className="col-md-6">
                <input
                type="text"
                className="form-control"
                placeholder="Họ và tên"
                required
                />
            </div>
            <div className="col-md-6">
                <input
                type="email"
                className="form-control"
                placeholder="Email của bạn"
                required
                />
            </div>
            <div className="col-12">
                <textarea
                className="form-control"
                rows="3"
                placeholder="Nội dung thắc mắc..."
                required
                ></textarea>
            </div>
            <div className="col-12 text-end">
                <button type="submit" className="btn btn-success px-4">Gửi</button>
            </div>
        </div>
    </form>
</div>
      </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2025- Nguyen Thi Hong Phan</p>
        </div>
    </div>
    </div>
    </div>
  )
}
