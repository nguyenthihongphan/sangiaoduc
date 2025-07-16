import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Assets/benzen.png';
import img2 from '../Assets/image2.png';
import img3 from '../Assets/image3.png';
import img4 from '../Assets/image4.png';
import img5 from '../Assets/image5.png';
import img6 from '../Assets/image6.png';
import img7 from '../Assets/image7.png';
import img8 from '../Assets/image8.png';
import './Partners.css'

import { Carousel } from 'react-bootstrap';

export const Partners = () => {
  const partnerSlides = [
  [
    { image: img1, title: 'Đối tác 3 năm' },
    { image: img2, title: 'Đối tác 4 năm' },
    { image: img3, title: 'Đối tác 2 năm' },
    { image: img4, title: 'Nhà tài trợ' },
  ],
  [
    { image: img5, title: 'Đối tác 1 năm' },
    { image: img6, title: 'Đối tác 6 tháng' },
    { image: img7, title: 'Đối tác 2 năm' },
    { image: img8, title: 'Nhà đồng hành' },
  ]
];
  return (
    <div className='partners'>
      <div className="partner-text text-center pt-4">
        <h2 className=''>Đối tác thân thiết</h2>
      </div>
      <div className="partner-content container mt-4">
        <Carousel indicators={false} interval={3000}>
  {partnerSlides.map((slide, slideIdx) => (
    <Carousel.Item key={slideIdx}>
      <div className="row">
        {slide.map((partner, idx) => (
          <div className="col-md-3 mb-4" key={idx}>
            <div className="partner-content-text p-3 border rounded text-center">
              <img src={partner.image} className="partner-card-img-top mb-2" alt="partner" />
              <p>
                <i className="fa-regular fa-building partner-text"></i> {partner.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Carousel.Item>
  ))}
        </Carousel>
      </div>
    </div>
  );
};
