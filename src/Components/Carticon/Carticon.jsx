import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="mkdf-shopping-cart-holder">
      <div className="mkdf-shopping-cart-inner">
        <a  className="mkdf-header-cart mkdf-header-cart-svg-path" href="#">
          <span className="mkdf-sc-opener-holder">
            <span className="mkdf-sc-opener-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="22px" viewBox="2 1.844 16 21.561">
                <path d="M14.295,7.404v-1.51c0-0.041-0.05-4.05-4.342-4.05c-3.092,0-4.139,2.505-4.263,3.875v1.685H2v16h16v-16H14.295z M6.688,5.765c0.011-0.119,0.303-2.921,3.265-2.921c3.227,0,3.34,2.739,3.342,3.05v1.51H6.688V5.765z M17,22.404H3v-14h2.69v4c-0.133,0.13-0.216,0.311-0.216,0.512c0,0.396,0.321,0.717,0.716,0.717c0.396,0,0.717-0.32,0.717-0.717c0-0.201-0.083-0.382-0.217-0.512l-0.001-4h6.606v4c-0.133,0.13-0.217,0.311-0.217,0.512c0,0.396,0.32,0.717,0.717,0.717c0.395,0,0.717-0.32,0.717-0.717c0-0.201-0.084-0.381-0.217-0.512v-4H17V22.404z"></path>
              </svg>
            </span>
            <span className="mkdf-sc-opener-count">{cartItems.length}</span> {/* Item count */}
          </span>
        </a>

        <div className="mkdf-sc-dropdown">
          <div className="mkdf-sc-dropdown-inner">
            {cartItems.length === 0 ? (
              <p className="mkdf-empty-cart">No products in the cart.</p> // This line causes no issues
            ) : (
              <ul className="mkdf-cart-list">
                {cartItems.map((item, index) => (
                  <li key={index} className="mkdf-cart-item">
                    <img
                      className="mkdf-cart-item-thumbnail"
                      src={item.img || '/default-img.jpg'}
                      alt={item.header || 'Item'}
                      width="50"
                      height="50"
                    />
                    <div className="mkdf-cart-item-details">
                      <span className="mkdf-cart-item-name">{item.header || 'No Name'}</span>
                      <span className="mkdf-cart-item-price">{item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="cartbtn">
                 <Link to='/shop/cart' className='view'>View Cart</Link>
             <Link to='/shop/checkout' className='view'>Check Out</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
