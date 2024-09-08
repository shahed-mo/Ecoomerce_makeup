import React from 'react';
import './Card4.scss';

export default function Card4({ img, header, par, read, dateMonth, dateDay }) {
  return (
    <div className="card4">
      <div className="card4_item">
        {/* Date created info */}
        <div className="mkdf-post-info-date entry-date published updated">
          <a href="#">
            <span className="mkdf-post-info-get-month">{dateMonth}</span>
            <span className="mkdf-post-info-get-date">{dateDay}</span>
          </a>
        </div>

        {/* Image section */}
        <div className="img3">
          <img src={img} alt="" className='imgsc' />
        </div>

        {/* Text section */}
        <div className="text">
          <div className="info">
            <a href="#">Lipstick</a>
            <a href="#" style={{marginLeft: '-2px'}}>By-Janny Joe</a>
            <h4 className="header">{header}</h4>
            <p className="par">{par}</p>
            <a href="#" className="read"><span className="mkdf-btn-text">{read}</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}
