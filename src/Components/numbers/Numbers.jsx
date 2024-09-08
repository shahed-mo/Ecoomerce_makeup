import React from 'react';
import './Number.scss';

export default function Numbers({ img, title, par }) {
  return (
    <div className="Numbers">
    <div className="num">
    <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="text">
        <h4 className="title">{title}</h4>
        <div className="par">
          <p>{par}</p>
        </div>
      </div>
    </div>
    </div>
  );
}
