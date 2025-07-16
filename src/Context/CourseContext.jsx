import React, { createContext,useEffect, useState } from 'react'
// import data_product from "../Components/Assets/data";
// import { data } from 'react-router-dom';
import axios from 'axios';

export const CourseContext = createContext(null);

const CourseContextProvider = (props) =>{
const [data_product, setDataProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/products");
        setDataProduct(res.data);
      } catch (err) {
        console.error("Lỗi lấy sản phẩm:", err);
      }
    };

    fetchData();
  }, []);
  const contextValue ={data_product};

  return(
    <CourseContext.Provider value={contextValue}>
      {props.children}
    </CourseContext.Provider>
  )
}

export default CourseContextProvider;