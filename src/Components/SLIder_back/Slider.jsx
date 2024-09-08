import React from 'react'
import './Slide.scss'
export default function Slider({header,headerpar,header4,pargraph}) {
  return (
    <div className="Slider3">
     <div className="cont">
     <p  className="mkdf-testimonial">{headerpar}</p>
      <h2 className="testimonial">{header}</h2>
      <p className="mkdf-testimonial-text">{pargraph}</p>
      <h4 className='header4'><span>{header4}</span></h4>
     </div>

    </div>
  )
}
