// Modal.js
import React from 'react';
import '../Back/Back.scss'; // Add your own styles

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>Close</button>
        <h1>Sign in to Vimeo to watch this video</h1>
        <p>You may need to allow cookies first. If asked, select <b>Allow</b> to continue.</p>
        <a href="https://vimeo.com/log_in" target="_blank" rel="noopener" className="modal-login" style={{background:'blue', width:'10%', 
          padding:'10px' ,borderRadius:'10px', position:'absolute', left:'45%', top:'90%'}}>Sign in</a>
      </div>
    </div>
  );
};

export default Modal;
