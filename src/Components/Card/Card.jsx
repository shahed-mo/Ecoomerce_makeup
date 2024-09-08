import React, { useContext, useState } from 'react';
import './Card.scss';
import { FaEye, FaHeart, FaCartPlus } from 'react-icons/fa'; // Import FaCartPlus here
import { IoAddOutline } from 'react-icons/io5';
import { CartContext } from '../Context/CartContext';
import { WishlistContext } from '../Context/WishlistContext';
import Modal from '../model/Mode';  // Import the modal component

const Card = ({ img, header, price, discount, p, id }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);  // Modal state

  const product = { img, header, price, discount, p, id };

  const handleAddToCart = () => {
    if (!isInCart) {
      setIsInCart(true);
      addToCart(product);
    }
  };

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      setIsInWishlist(true);
      addToWishlist(product);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card-item">
      <div className="card-item-img" onClick={handleOpenModal}>
        <img src={img} alt={header} />
      </div>
      <div className="card-item-content">
        <h4><a>{header}</a></h4>
        <p className="lip">{p}</p>
        <div className="sold">
          {discount ? (
            <>
              <p className="discount" style={{ textDecoration: 'line-through', color: '#000' }}>{discount}</p>
              <p className="price">{price}</p>
            </>
          ) : (
            <p className="price">{price}</p>
          )}
        </div>
      </div>
      <div className="hover-overlay">
        <div className="icon-card">
          <div className="add">
            <button className="add" onClick={handleAddToCart}>
              {isInCart ? <FaCartPlus /> : <IoAddOutline />}
            </button>
          </div>
          <div className="eye" onClick={handleOpenModal}>
            <FaEye />
          </div>
          <div className="heart">
            <button onClick={handleAddToWishlist}>
              {isInWishlist ? <FaHeart /> : <FaHeart />}
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} product={product} /> {/* Add Modal */}
    </div>
  );
};

export default Card;
