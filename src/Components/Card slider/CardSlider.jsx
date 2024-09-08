import React from 'react'
import './Cardslider.scss'
export default function CardSlider({img,img2}) {
  return (
    <div className="cardslider-item">
        <div className="cardslider-item-img" style={{marginRight:'0'}}>
            <img className= "img2"src={img2}alt="" />
            <img className= "img"src={img} alt="" />
        </div>
    </div>
  )
}
