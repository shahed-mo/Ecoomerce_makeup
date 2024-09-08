import React from 'react'
import './S_card.scss'
export default function S_Card({img,side_h,pargraph,price}) {
  return (
    <>
    
  <div className="card_container">
    
     <div className="small_card_content">
    <div className="img">
        <img src={img} alt="" />
    </div>
    <div className="text_img">
        <h4 className="side_h">{side_h}</h4>
        <p className="pargraph">{pargraph}</p>
        <span className="price">{price}</span>
    </div>
   </div>
  </div>
  </>
  )
}
