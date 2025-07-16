import React from 'react'
import './ProductDetail.css'

export const ProductDetail = (props) => {
    const {product} = props;
  return (
    <div className='productDetail'>
        <div className="d-flex jusstify-between-center productDetail-left">
         <div className="product-img">
            <img className='product-main-img' src={product.image}alt="" />
            <p className='product-main-text mt-2'><strong>{product.context}</strong></p>
         </div>
         <div className="product-content ps-3">
            <h3><span className='mt'>Mục tiêu</span><span className='kh'> khóa học</span></h3>
            <p>{product.dec}</p>
            <h3><span className='kh'>Mức độ</span><span className='mt'> đánh giá</span></h3>
                -Rất nhiều học viên đạt điểm cao
            <p></p>
            <div className='d-flex product-content-review '>
               <div className="review d-flex flex-column">
                    <span>Kỹ năng</span>
                    <p className="mb-0">9.0</p>
                </div>
                <div className="review-core btn btn-success d-flex flex-column ms-2"> 
                    <span>Đánh giá</span>
                    <p className="mb-0">9.0</p>
                </div>
                <div className="review-price ms-auto text-end">
                    <span className='ud'>Ưu đãi</span>
                    <h3 className="mb-0 price-r">{product.price}.000.000đ</h3>
                </div>
            </div>
         </div>        
        </div>
        <div className=" mt-4 d-flex justify-content-end">
        <button className='product-buy btn btn-danger'>Đăng ký ngay</button>
        </div>
    </div>
  )
}
