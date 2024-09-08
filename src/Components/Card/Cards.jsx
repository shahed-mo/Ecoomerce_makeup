import React from 'react';
import './Cards.scss';

export default function Cards({ img, title, cat }) {
  return (
    <div className="Cards">
      <div className="cards-item">
        <div className="cards-img">
          <img src={img} alt="Product" />
        </div>
        <div className="mkdf-pli-text-holder">
          <div className="mkdf-pli-text-wrapper">
            <div className="mkdf-pli-text">
              <h4 itemProp="name" className="mkdf-pli-title entry-title">{title}</h4>
              <div className="mkdf-pli-category-holder">
                <a className="mkdf-pli-category" style={{ color: 'rgb(10, 88, 202)' }}>Beauty</a>
                <a className="mkdf-pli-category" style={{ color: 'rgb(10, 88, 202)' }}>{cat}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
