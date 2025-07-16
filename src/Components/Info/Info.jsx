import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Info.css'
import inf from '../Assets/image_inf.png'
export const Info = () => {
  return (
    <div className='info'>
        <div className="container mt-5">
            <div className=" d-flex info-san">
                <div className="info-san-text mx-3">
                <h2>Tầm nhìn</h2>
                </div>
                <div className="info-san-con">
                <p>Sàn giáo dục là một nền tảng trực tuyến đóng vai trò trung gian, kết nối giữa người dạy (giảng viên, trung tâm đào tạo) và người học (học sinh, sinh viên, người đi làm). Tương tự như một chợ điện tử trong lĩnh vực giáo dục, sàn giáo dục cho phép giảng viên đăng tải các khóa học, đồng thời giúp người học dễ dàng tìm kiếm, lựa chọn và đăng ký tham gia những khóa học phù hợp với nhu cầu của mình.</p>
                </div>
            </div>
            <div className="d-flex info-san-mt mt-3">
              <div className="text-box-info">Tạo môi trường học tập linh hoạt, mọi lúc mọi nơi.</div>
              <div className="text-box-info">Giúp giảng viên tiếp cận hàng nghìn học viên dễ dàng.</div>
              <div className="text-box-info">Đơn giản hóa quy trình quảng bá, bán khóa học.</div>
          </div>
            <div className=" d-flex info-san mt-5">
              <div className="info-san-end ">
                <p>Các sàn giáo dục thường tích hợp nhiều chức năng hỗ trợ như thanh toán trực tuyến, cấp chứng chỉ sau khi hoàn thành khóa học, đánh giá chất lượng giảng viên, hỗ trợ học viên, và các công cụ quản lý hiệu quả quá trình học tập.
                  Sàn giáo dục ra đời nhằm mang lại sự linh hoạt, tiện lợi cho quá trình học tập trong thời đại số, đồng thời mở rộng cơ hội tiếp cận tri thức cho mọi người, ở mọi lứa tuổi, mọi nơi trên thế giới.
                </p>
              </div>
              <div className="info-san-img">
                <img src={inf} alt="" />
              </div>
            </div>
          <div className="d-flex info-san mt-4 info-san-border"></div>
        </div>
    </div>
    
  )
}
