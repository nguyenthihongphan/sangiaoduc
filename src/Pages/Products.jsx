import React,{useContext,useEffect, useState} from 'react'
import { CourseContext } from '../Context/CourseContext'
import { useParams,useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrums } from '../Components/Breadcrum/Breadcrum'
import { ProductDetail } from '../Components/ProductDetail/ProductDetail'
import './CSS/Product.css'

export const Products = () => {
    const {data_product} =useContext(CourseContext)
    const {productId} = useParams();
    const navigate = useNavigate();
    const product = data_product.find((e) => String(e.id) === String(productId));
    const [showModal , setShowModal] = useState(false);
      
    useEffect(() => {
    if (product) {
      setShowModal(true);
    document.body.style.overflow = 'hidden';
    }
    else {
      setShowModal(false)
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
    }, [product]);

     const closeModal = () => {
    setShowModal(false);
    navigate(-1); 
  };
   if (!product) return null;
  return (
    <>
    {showModal && (
        <div className="modal fade show d-block w-100" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered" >
            <div className="modal-content modalcon">
              <div className="modal-header">
                <Breadcrums product={product} />
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body"style={{maxHeight: '150vh', overflowY: 'auto'}}>
                <ProductDetail product={product} />
              </div>
            </div>
          </div>
        </div>
      )}
      </>
  )
}