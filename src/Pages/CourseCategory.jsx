import React, { useContext, useState } from 'react';
import './CSS/CourseCategory.css'
import { CourseContext } from '../Context/CourseContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import dropdow_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

 export const CourseCategory = (props) => {
  
    const{data_product} = useContext(CourseContext)
    const [showDropdown, setShowDropdown] = useState(false);
      const [menu,setMenu] = useState("course")
        // search and filter
      const [inputValue, setInputValue] = useState('');
      const [searchTerm, setSearchTerm] = useState('');
      const [priceFilter, setPriceFilter] = useState(null);
        const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  }
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
  return (
    <div className='courseCategory'>
      <img src={props.banner} className='w-100' alt=''></img>
      <div className="course-sort mt-3 pt-1">
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
  <span className="me-2">Lọc theo</span>
  <div className="dropdown-filter position-relative d-inline-block">
    <img
      src={dropdow_icon} alt="Dropdown icon" className="cursor-pointer" onClick={toggleDropdown}/>
    {showDropdown && (
      <ul
        className="position-absolute bg-white border rounded shadow mt-2 p-2"
        style={{
          right: 0,
          minWidth: '180px',
          listStyle: 'none',
          zIndex: 1050,
        }}>
          <li className="cursor-pointer" onClick={() => handlePriceFilter('low')}>Dưới 2 triệu</li>
          <li className="cursor-pointer" onClick={() => handlePriceFilter('mid')}>2 - 4 triệu</li>
          <li className="cursor-pointer" onClick={() => handlePriceFilter('high')}>Trên 4 triệu</li>
          <li className="cursor-pointer text-danger" onClick={() => handlePriceFilter(null)}>Tất cả</li>
      </ul>
    )}
  </div>
</div>
    </div>
      </div>
      <div className="courseCategory-product d-flex flex-column">
        <div className="container mt-3 mb-4">
      <div className="row mt-2">
        {/* {data_product.map((item,i)=>{
          if(props.category === item.category){
           return <Item key={i} id={item.id} name={item.name} context={item.context} image ={item.image} price ={item.price}/>            
          }
          else{
            return <Item key={i} id={item.id} name={item.name} context={item.context} image ={item.image} price ={item.price}/>            
          }
        })
        } */}
            {filteredProducts.length > 0 ? (
                filteredProducts.map((item, i) => (
                  <Item key={i} id={item.id} name={item.name} context={item.context} image={item.image} price={item.price} />
                ))
              ) : (
                <p className="text-center">Không tìm thấy khóa học phù hợp.</p>
              )}
      </div>
      </div>
    </div>
    </div>
  )
}
  // export default CourseCategory

