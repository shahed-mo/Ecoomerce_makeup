// Background.js
import React, { useState } from 'react';
import './Back.scss';
import Modal from '../Modal/Modal'; // Import the modal component

export default function Background({ img, title, header, par1, par2, btn2, icon }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="imges" style={{ backgroundImage: `url(${img})` }}>
      <div className="back_content">
        {icon && (
          <a href="#" onClick={handleIconClick}>
            <span className="icon2">{icon}</span>
          </a>
        )}
        <span className="title">{title}</span>
        <h2 className="header">{header}</h2>
        <h4 className="par1">{par1}</h4>
        <p className="par2">{par2}</p>
        {btn2 && (
          <a href="#" className="btn2">
            <span className="mkdf-btn-text">{btn2}</span>
          </a>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
