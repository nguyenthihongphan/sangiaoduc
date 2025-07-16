import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Teacher = (props) => {
 return (
    <div className="teacher">
        <div className="experience-text text-center pt-0 p-4">
        <h2 className='m-3'>Giảng viên xuất sắc</h2>
      </div>
        <div className="container mt-2">
            <div className="row gx-4">
                <div className="col-md-6">
                <div className="card mb-4 p-3 shadow-sm border-0 rounded-4">
                <div className="d-flex">
                    <div className="flex-grow-1">
                    <div className="d-flex align-items-center flex-wrap mb-1">
                        <h5 className="mb-0 fw-bold me-2">{props.name}</h5>
                        <span className="text-warning me-2">
                        <i className="fas fa-star"></i>
                        </span>
                        <span className="text-muted">{props.role}</span>
                        <i className="fas fa-shield-alt text-success ms-2"></i>
                    </div>
                    <div className="d-flex flex-wrap mb-2">
                        <span className="badge bg-light text-dark me-2 mb-1">Lập trình</span>
                        <span className="badge bg-light text-dark me-2 mb-1">Java</span>
                        <span className="badge bg-light text-dark me-2 mb-1">Python</span>
                        <span className="badge bg-light text-dark me-2 mb-1">C++</span>
                    </div>
                    <div className="mb-2">
                        <h5>Nguyễn Thị Hồng</h5>
                        <strong>
                        Giảng viên có 6 năm kinh nhiệm
                        </strong>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div>
                        <span className="fw-bold">Dạy 2 buổi</span>{" "}
                        <span className="text-muted">/ ngày</span>
                        </div>
                        <div className="d-flex">
                        <button className="btn btn-outline-secondary me-2 rounded-circle">
                            <i className="far fa-heart"></i>
                        </button>
                        <button className="btn btn-success rounded-pill">Xem thêm</button>
                        </div>
                    </div>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    <div className="text-muted mt-2"></div>
                    </div>
                </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="card mb-4 p-3 shadow-sm border-0 rounded-4">
                <div className="d-flex">
                    <div className="flex-grow-1">
                    <div className="d-flex align-items-center flex-wrap mb-1">
                        <h5 className="mb-0 fw-bold me-2">{props.name}</h5>
                        <span className="text-warning me-2">
                        <i className="fas fa-star"></i>
                        </span>
                        <span className="text-muted">{props.role}</span>
                        <i className="fas fa-shield-alt text-success ms-2"></i>
                    </div>
                    <div className="d-flex flex-wrap mb-2">
                        <span className="badge bg-light text-dark me-2 mb-1">IOS</span>
                        <span className="badge bg-light text-dark me-2 mb-1">Java</span>
                        <span className="badge bg-light text-dark me-2 mb-1">Android</span>
                        <span className="badge bg-light text-dark me-2 mb-1">C++</span>
                    </div>
                    <div className="mb-2">
                        <h5>Nguyễn Văn Phúc</h5>
                        <strong>
                        Giảng viên có 10 năm kinh nhiệm
                        </strong>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div>
                        <span className="fw-bold">Dạy 3 buổi</span>{" "}
                        <span className="text-muted">/ ngày</span>
                        </div>
                        <div className="d-flex">
                        <button className="btn btn-outline-secondary me-2 rounded-circle">
                            <i className="far fa-heart"></i>
                        </button>
                        <button className="btn btn-success rounded-pill">Xem thêm</button>
                        </div>
                    </div>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    <div className="text-muted mt-2"></div>
                    </div>
                </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="card mb-4 p-3 shadow-sm border-0 rounded-4">
                <div className="d-flex">
                    <div className="flex-grow-1">
                    <div className="d-flex align-items-center flex-wrap mb-1">
                        <h5 className="mb-0 fw-bold me-2">{props.name}</h5>
                        <span className="text-warning me-2">
                        <i className="fas fa-star"></i>
                        </span>
                        <span className="text-muted">{props.role}</span>
                        <i className="fas fa-shield-alt text-success ms-2"></i>
                    </div>
                    <div className="d-flex flex-wrap mb-2">
                        <span className="badge bg-light text-dark me-2 mb-1">Lập trình</span>
                        <span className="badge bg-light text-dark me-2 mb-1">PHP</span>
                        <span className="badge bg-light text-dark me-2 mb-1">Fontend</span>
                        <span className="badge bg-light text-dark me-2 mb-1">C++</span>
                    </div>
                    <div className="mb-2">
                        <h5>Nguyễn Minh Hùng</h5>
                        <strong>
                        Giảng viên có 7 năm kinh nhiệm
                        </strong>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div>
                        <span className="fw-bold">Dạy 2 buổi</span>{" "}
                        <span className="text-muted">/ ngày</span>
                        </div>
                        <div className="d-flex">
                        <button className="btn btn-outline-secondary me-2 rounded-circle">
                            <i className="far fa-heart"></i>
                        </button>
                        <button className="btn btn-success rounded-pill">Xem thêm</button>
                        </div>
                    </div>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    <div className="text-muted mt-2"></div>
                    </div>
                </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="card mb-4 p-3 shadow-sm border-0 rounded-4">
                <div className="d-flex">
                    <div className="flex-grow-1">
                    <div className="d-flex align-items-center flex-wrap mb-1">
                        <h5 className="mb-0 fw-bold me-2">{props.name}</h5>
                        <span className="text-warning me-2">
                        <i className="fas fa-star"></i>
                        </span>
                        <span className="text-muted">{props.role}</span>
                        <i className="fas fa-shield-alt text-success ms-2"></i>
                    </div>
                    <div className="d-flex flex-wrap mb-2">
                        <span className="badge bg-light text-dark me-2 mb-1">Tiếng anh</span>
                        <span className="badge bg-light text-dark me-2 mb-1">Toiec</span>
                        <span className="badge bg-light text-dark me-2 mb-1">2+</span>
                    </div>
                    <div className="mb-2">
                        <h5>Nguyễn Thị Hồng Nhung</h5>
                        <strong>
                        Giảng viên có 4 năm kinh nhiệm
                        </strong>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div>
                        <span className="fw-bold">Dạy 3 buổi</span>{" "}
                        <span className="text-muted">/ ngày</span>
                        </div>
                        <div className="d-flex">
                        <button className="btn btn-outline-secondary me-2 rounded-circle">
                            <i className="far fa-heart"></i>
                        </button>
                        <button className="btn btn-success rounded-pill">Xem thêm</button>
                        </div>
                    </div>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    <div className="text-muted mt-2"></div>
                    </div>
                </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="card mb-4 p-3 shadow-sm border-0 rounded-4">
                <div className="d-flex">
                    <div className="flex-grow-1">
                    <div className="d-flex align-items-center flex-wrap mb-1">
                        <h5 className="mb-0 fw-bold me-2">{props.name}</h5>
                        <span className="text-warning me-2">
                        <i className="fas fa-star"></i>
                        </span>
                        <span className="text-muted">{props.role}</span>
                        <i className="fas fa-shield-alt text-success ms-2"></i>
                    </div>
                    <div className="d-flex flex-wrap mb-2">
                        <span className="badge bg-light text-dark me-2 mb-1">IELTS</span>
                        <span className="badge bg-light text-dark me-2 mb-1">Nói</span>
                        <span className="badge bg-light text-dark me-2 mb-1">Viết</span>
                        <span className="badge bg-light text-dark me-2 mb-1">Ngữ pháp</span>
                    </div>
                    <div className="mb-2">
                        <h5>Lê Thị Thúy</h5>
                        <strong>
                        Giảng viên có 3 năm kinh nhiệm
                        </strong>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div>
                        <span className="fw-bold">Dạy 2 buổi</span>{" "}
                        <span className="text-muted">/ ngày</span>
                        </div>
                        <div className="d-flex">
                        <button className="btn btn-outline-secondary me-2 rounded-circle">
                            <i className="far fa-heart"></i>
                        </button>
                        <button className="btn btn-success rounded-pill">Xem thêm</button>
                        </div>
                    </div>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    <div className="text-muted mt-2"></div>
                    </div>
                </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="card mb-4 p-3 shadow-sm border-0 rounded-4">
                <div className="d-flex">
                    <div className="flex-grow-1">
                    <div className="d-flex align-items-center flex-wrap mb-1">
                        <h5 className="mb-0 fw-bold me-2">{props.name}</h5>
                        <span className="text-warning me-2">
                        <i className="fas fa-star"></i>
                        </span>
                        <span className="text-muted">{props.role}</span>
                        <i className="fas fa-shield-alt text-success ms-2"></i>
                    </div>
                    <div className="d-flex flex-wrap mb-2">
                        <span className="badge bg-light text-dark me-2 mb-1">Lập trình</span>
                        <span className="badge bg-light text-dark me-2 mb-1">Java</span>
                        <span className="badge bg-light text-dark me-2 mb-1">Python</span>
                        <span className="badge bg-light text-dark me-2 mb-1">C++</span>
                    </div>
                    <div className="mb-2">
                        <h5>Lê Thị Hồng Hạnh</h5>
                        <strong>
                        Giảng viên có 10 năm kinh nhiệm
                        </strong>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div>
                        <span className="fw-bold">Dạy 3 buổi</span>{" "}
                        <span className="text-muted">/ ngày</span>
                        </div>
                        <div className="d-flex">
                        <button className="btn btn-outline-secondary me-2 rounded-circle">
                            <i className="far fa-heart"></i>
                        </button>
                        <button className="btn btn-success rounded-pill">Xem thêm</button>
                        </div>
                    </div>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>

                    <div className="text-muted mt-2"></div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}
