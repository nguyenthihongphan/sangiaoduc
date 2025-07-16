import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Carousel } from 'react-bootstrap';
import './Comment.css'

export const Comment = () => {
   
  return (
    <div className='comment'>
      <div className="comment-text text-center p-4">
        <h2 className=''>Cảm nhận</h2>
      </div>
        <Carousel interval={null} touch={false} controls={true} indicators={false}
      nextIcon={<i className="fas fa-chevron-right fa-2x text-dark"></i>}
      prevIcon={<i className="fas fa-chevron-left fa-2x text-dark"></i>}
    >
      <Carousel.Item>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="comment-box p-3 h-100">
                <div className="comment-content">
                    <p>Sau khi hoàn thành khóa học, trình độ Thiết kế của em lên một tầm cao mới. Giảng viên nhiệt tình, hỗ trợ rất tốt cho học viên. Em rất cảm ơn
                    </p>
                </div>
              <div className="d-flex mt-3">
                <i className="fas fa-user-circle fa-2x text-success me-2"></i>
                <div>
                <div className="comment-address mt-2">
                  <h6 className="mb-0">Hồng Phấn</h6>
                  <span>TP Hồ Chí Minh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="col-md-3 mb-4">
            <div className="comment-box p-3 h-100">
                    <div className="comment-content">
                        <p>
                          Trung tâm đầu tiên đem đến cho mình sự hài lòng. Ở đây Giáo viên hào phóng, chuyên môn xuất sắc, tư vấn viên rất nhiệt tình, cơ sở vật chất rất tốt.
                        </p>
                    </div>
                    <div className="comment-inf d-flex mt-3">
                        <div className="comment-user me-2">
                            <i className="fas fa-user-circle fa-2x text-success"></i>
                        </div>
                        <div className="comment-address mt-2">
                        <h6 className="mb-0">Thảo Ngân</h6>
                        <span>TP Hồ Chí Minh</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-3 mb-4">
            <div className="comment-box p-3 h-100">
                    <div className="comment-content">
                        <p>May mắn khi học được những giáo viên nhiệt tình, tận tâm từ trung tâm, luôn hỗ trợ học viên trên mọi mặt trận. Mong thầy cô đều có thật nhiều sức khỏe. </p>
                    </div>
                    <div className="comment-inf d-flex mt-3">
                        <div className="comment-user me-2">
                            <i className="fas fa-user-circle fa-2x text-success"></i>
                        </div>
                        <div className="comment-address mt-2">
                        <h6 className="mb-0">Trọng Phúc</h6>
                        <span>TP Hồ Chí Minh</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-3 mb-4">
            <div className="comment-box p-3 h-100">
                    <div className="comment-content">
                        <p>
                            Sau khi hoàn thành khóa học, trình độ Thiết kế của em lên một tầm cao mới. Giảng viên nhiệt tình, hỗ trợ rất tốt cho học viên. Em rất cảm ơn
                        </p>
                    </div>
                    <div className="comment-inf d-flex mt-3">
                        <div className="comment-user me-2">
                            <i className="fas fa-user-circle fa-2x text-success"></i>
                        </div>
                        <div className="comment-address mt-2">
                        <h6 className="mb-0">Minh Nhật</h6>
                        <span>TP Đà Nẵng</span>
                    </div>
                </div>
            </div>
        </div>
         </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
             <div className="comment-box p-3 h-100">
                <div className="comment-content"> 
                    <p>Sau khi hoàn thành khóa học, trình độ Thiết kế của em lên một tầm cao mới. Giảng viên nhiệt tình, hỗ trợ rất tốt cho học viên. Em rất cảm ơn
                    </p>
                </div>
              <div className="d-flex mt-3">
                <i className="fas fa-user-circle fa-2x text-success me-2"></i>
                <div>
                <div className="comment-address mt-2">
                  <h6 className="mb-0">Hồng Pha</h6>
                  <span>TP Hồ Chí Minh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="col-md-3 mb-4">
            <div className="comment-box p-3 h-100">
                    <div className="comment-content">
                        <p>
                          Trung tâm đầu tiên đem đến cho mình sự hài lòng. Ở đây Giáo viên hào phóng, chuyên môn xuất sắc, tư vấn viên rất nhiệt tình, cơ sở vật chất rất tốt.
                        </p>
                    </div>
                    <div className="comment-inf d-flex mt-3">
                        <div className="comment-user me-2">
                            <i className="fas fa-user-circle fa-2x text-success"></i>
                        </div>
                        <div className="comment-address mt-2">
                        <h6 className="mb-0">Hồng Minh</h6>
                        <span>TP Hồ Chí Minh</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-4">
                <div className="comment-box p-3 h-100">
                    <div className="comment-content">
                        <p>Khóa học giúp em rút ngắn thời gian học nhờ kiến thức thực tiễn, bài tập đúng trọng tâm. Rất cảm ơn trung tâm đã hỗ trợ em hết mình</p>
                    </div>
                    <div className="comment-inf d-flex mt-3">
                        <div className="comment-user me-2">
                            <i className="fas fa-user-circle fa-2x text-success"></i>
                        </div>
                        <div className="comment-address mt-2">
                        <h6 className="mb-0">Ngọc Hà</h6>
                        <span>TP Hồ Chí Minh</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-3 mb-4">
            <div className="comment-box p-3 h-100">
                    <div className="comment-content">
                        <p>
                           Rất cảm ơn trung tâm đã hỗ trợ em hết mình, từ học tập đến định hướng nghề nghiệp. Mong thầy cô đều có thật nhiều sức khỏe, hỗ trợ rất tốt cho học viên.                         </p>
                    </div>
                    <div className="comment-inf d-flex mt-3">
                        <div className="comment-user me-2">
                            <i className="fas fa-user-circle fa-2x text-success"></i>
                        </div>
                        <div className="comment-address mt-2">
                        <h6 className="mb-0">Minh Phụng</h6>
                        <span>Hà Nội</span>
                    </div>
                </div>
            </div>
        </div>
         </div>
        </div>
      </Carousel.Item>
      </Carousel>
        
    </div>
  )
}
