import React, { useContext } from 'react';
import './Modal.scss';
import { CartContext } from '../Context/CartContext';

const Modal = ({ isOpen, onClose, product }) => {
  const { addToCart } = useContext(CartContext);

  if (!isOpen) return null;

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
    onClose(); // Optionally close the modal after adding to cart
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="modal-body">
          <img src={product.img} alt={product.header} />
          <h2 className='title' style={{textAlign:"center"}}>{product.header}</h2>
          <p className='par'>{product.p}</p>
          <div className="price-section">
            {product.discount && <span className="discount">{product.discount}</span>}
            <span className="price">{product.price}</span>
          </div>
          <button className="purchase-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
