import React from 'react';
import './Font.scss';

export default function Font_section({ imgback, img, header, pargraph }) {
  return (
    <div className="fonts">
      <div className="img-text-wrapper">
        <div className="img">
          <img className="imgback" src={imgback} alt="" />
          <img className="img1" src={img} alt="" />
        </div>
        <div className="text">
          <h4 className="header">{header}</h4>
          <p className="pargraph">{pargraph}</p>
        </div>
      </div>
    </div>
  );
}
