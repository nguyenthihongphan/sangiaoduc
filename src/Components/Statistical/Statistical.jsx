import React from 'react'
import './Statistical.css'

export const Statistical = () => {
  return (
    <div className='statistical bg-light'>
      <div className="statistical-text text-center p-4">
        <h2 className=''>Số lượng kết nối</h2>
      </div>
      <div className="container">
        <div className="row pb-3">
            <div className="col-md-3">
                <div className="sta-sl text-center">
                    <h1>2.000+</h1>
                    <p>Học viên tốt nghiệp</p>
                </div>
            </div>
             <div className="col-md-3">
                <div className="sta-sl text-center">
                    <h1>30+</h1>
                    <p>Khóa học đào tạo</p>
                </div>
            </div>
             <div className="col-md-3">
                <div className="sta-sl text-center">
                    <h1>90%</h1>
                    <p>Học viên có việc làm</p>
                </div>
            </div>
             <div className="col-md-3">
                <div className="sta-sl text-center">
                    <h1>50+</h1>
                    <p>Đối tác tuyển dụng</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
