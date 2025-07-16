import React from 'react'
import banner1 from '../Assets/banner.jpg'
import banner2 from '../Assets/banner3.png'
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Banner = () => {
    const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
              <img className="d-block w-100 h-90" src={banner1} alt=" slide"/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
              <img className="d-block w-100 h-90" src={banner2} alt="Second slide"/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}