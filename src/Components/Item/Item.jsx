import React, { useState ,useContext, useEffect } from 'react';
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useParams } from 'react-router-dom';
import { CourseContext } from '../../Context/CourseContext';
import { Products } from '../../Pages/Products';

export const Item = (props) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (props.initialLiked !== undefined) {
      setLiked(props.initialLiked);
    } else {
      const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
      setLiked(likedItems.includes(props.id));
    }
  }, [props.id, props.initialLiked]);

  const toggleLike = () => {
     const updatedLiked = !liked;
  setLiked(updatedLiked);
  let likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];

  if (updatedLiked) {
    likedItems.push(props.id);
  } else {
    likedItems = likedItems.filter((id) => id !== props.id);
  }

  localStorage.setItem("likedItems", JSON.stringify(likedItems));


  };
   const { productId } = useParams();
  const { data_product } = useContext(CourseContext);
  const selectedProduct = data_product.find(e => String(e.id) === String(productId));
  
  return (
   <div className="col-12 col-sm-6 col-md-3 mb-4">
        <div className=" item card">
            <img src={props.image} className="card-img-top w-100" alt="product" />
            <div className="card-body d-flex flex-column">
             <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">{props.name}</h5>
             <i
              className={`fa-heart text-danger ${liked ? 'fa-solid text-danger' : 'fa-regular'}`}
              style={{ cursor: 'pointer' }}
              onClick={toggleLike}
            ></i>
          </div>
            <p className="card-text">{props.context}</p>
            <p className="lead mb-0">{props.price}.000.000 đ</p>
            <Link to={`/product/${props.id}`} className="btn btn-danger mt-3 w-100">
                Xem chi tiết
            </Link>
            </div>
        </div>
         {productId && selectedProduct && <Products product={selectedProduct} />}
    </div>
  )
}
