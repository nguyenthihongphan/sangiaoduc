import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export const Breadcrums = (props) => {
    const{product} = props;
  return (
    <div className='breadcrums'>
      Course <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}
