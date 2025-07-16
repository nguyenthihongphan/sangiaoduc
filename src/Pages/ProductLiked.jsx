import React, { useContext, useEffect, useState } from 'react';
import { CourseContext } from '../Context/CourseContext';
import { Item } from '../Components/Item/Item';

export const ProductLiked = () => {
  const { data_product } = useContext(CourseContext);
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("likedItems")) || [];
    setLikedItems(stored);
  }, []);

  const filteredProducts = data_product.filter(product => likedItems.includes(product.id));

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Danh sách khóa học đã thích</h2>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              context={item.context}
              image={item.image}
              price={item.price}
              initialLiked={true} 
            />
          ))
        ) : (
          <p className="text-center">Bạn chưa có khóa đọc đã thích nào.</p>
        )}
      </div>
    </div>
  );
};
