import React, {useState, useContext} from 'react'
import { CourseContext } from '../../Context/CourseContext';
import './Popular.css'
// import data_product from '../Assets/data'
import {Item} from '../Item/Item'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaSearch } from "react-icons/fa";
import dropdow_icon from '../Assets/dropdown_icon.png'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Products } from '../../Pages/Products';

export const Popular = () => {
  const { data_product } = useContext(CourseContext);
 const { productId } = useParams();
  const selectedProduct = data_product.find(p => String(p.id) === String(productId));
    const [showDropdown, setShowDropdown] = useState(false);
    const [menu,setMenu] = useState("course");
     // search and filter
    const [inputValue, setInputValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [priceFilter, setPriceFilter] = useState(null);
  
    const toggleDropdown = () => {
      setShowDropdown(prev => !prev);
    }
  //   const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value.toLowerCase());
  // };
    const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSearchClick = () => {
  setSearchTerm(inputValue.toLowerCase());
};
    const handlePriceFilter = (filter) => {
    setPriceFilter(filter);
    setShowDropdown(false);
  };
    const filteredProducts = data_product.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchTerm);
    const matchPrice =
    priceFilter === null ||
    (priceFilter === 'low' && item.price < 2) ||
    (priceFilter === 'mid' && item.price >= 2 && item.price <= 4) ||
    (priceFilter === 'high' && item.price > 4);
    return matchSearch && matchPrice;
  });
  // Sản phẩm gợi ý
    const [suggestedItems, setSuggestedItems] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
    const handleSuggestions = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.id) {
      alert("Vui lòng đăng nhập để nhận gợi ý!");
      return;
    }

    try {
  const res = await axios.get('http://localhost:8000/suggestions', {
    params: { id: Number(user.id) }
    });
    const suggestedItems = res.data.length ? res.data[0].products : [];
    setSuggestedItems(suggestedItems);
    setShowSuggestions(true);
  } catch (err) {
    console.error("Lỗi gọi gợi ý:", err);
    alert("Không thể lấy dữ liệu gợi ý.");
  }
  };
     return (
    <div className='popular'>
        <h2 className='text-center mt-4 pb-2'>Khóa học nổi bật</h2>
        <div className="container d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div className="d-flex align-items-center " style={{ maxWidth: '500px', width: '100%' }}>
           <div className="input-group shadow rounded overflow-hidden">
            <input
              type="text"
              className="form-control py-2 px-3 border-0"
              placeholder="Tìm kiếm khóa học..."
              value={inputValue}
              onChange={handleInputChange}
              style={{ fontSize: '1rem' }}
            />
            <span
              className="input-group-text bg-white text-dark border-0"
              style={{ cursor: "pointer" }}
              onClick={handleSearchClick}
            >
              <FaSearch />
            </span>
          </div>
          </div>
       <div className="course_sortby d-flex align-items-center">
      <span className="me-2 ">Lọc theo</span>
      <div className="dropdown-filter position-relative d-inline-block">
          <i
            className="fas fa-chevron-down fs-5 text-dark cursor-pointer"
            onClick={toggleDropdown}
          ></i>
        {showDropdown && (
        <ul
          className="position-absolute bg-white border rounded shadow-lg mt-2 p-2"
          style={{
            right: 0,
            minWidth: '200px',
            listStyle: 'none',
            zIndex: 1050,
          }}>
          <li className="cursor-pointer py-2 px-3 hover-bg-light"onClick={() => handlePriceFilter('low')}>
            Dưới 2 triệu</li>
          <li className="cursor-pointer py-2 px-3 hover-bg-light"onClick={() => handlePriceFilter('mid')}>
            2 - 4 triệu</li>
          <li className="cursor-pointer py-2 px-3 hover-bg-light"onClick={() => handlePriceFilter('high')}>
            Trên 4 triệu</li>
          <li className="cursor-pointer py-2 px-3 text-danger hover-bg-light"
            onClick={() => handlePriceFilter(null)}>Tất cả</li>
        </ul>
        )}
    </div>
  </div>
  </div>
    <div className="popular-item d-flex flex-column">
      <div className="container mt-1 mb-4">
        <div className="row mt-4">
            {/* {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} context={item.context} image ={item.image} price ={item.price}></Item>
            })} */}
            {filteredProducts.length > 0 ? (
            filteredProducts.map((item, i) => (
              <Item key={i} id={item.id} name={item.name} context={item.context} image={item.image} price={item.price} />
            ))
          ) : (
            <p className="text-center">Không tìm thấy khóa học phù hợp.</p>
          )}
        </div>
        {/* {productId && selectedProduct && <Products product={selectedProduct} />} */}
      </div>
      <div>
  <div>
</div>
</div>
    </div>
    {/* <div className="course-loadmore">
          <Link className={`nav-link  ${menu==="class"}`} to='/class'>Xem thêm</Link>
    </div> */}
    <div className="text-center my-4">
  <button className="course-loadmore btn btn-warning" onClick={handleSuggestions}>
    Gợi ý khóa học phù hợp
  </button>
</div>

{showSuggestions && (
  <div className="bg-light">
  <div className="container mb-5 p-3">
    <h4 className="text-center">Gợi ý dành cho bạn</h4> <hr />
    <div className="row mt-3">
      {suggestedItems.length > 0 ? (
        suggestedItems.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} context={item.context} image={item.image} price={item.price} />
        ))
      ) : (
        <p className="text-center">Không có gợi ý nào.</p>
      )}
    </div>
  </div>
  </div>
)}
    </div>
  )
}
