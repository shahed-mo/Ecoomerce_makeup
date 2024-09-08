import React, { useContext } from 'react';
import { WishlistContext } from '../Context/WishlistContext';
import { CartContext } from '../Context/CartContext';
import './Whis.scss';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTumblr, FaVk, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { CiMail, CiShare2 } from "react-icons/ci";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="wishlist-container">
      <h4 className="wishlist-title">Wishlist</h4>
      {wishlist.length === 0 ? (
        <div className="wishlist-empty">
          <p className="wishlist-empty-text">No items added to the wishlist</p>
        </div>
      ) : (
        <div className="w">
          <div className="share">
            <div className="share-item">
              <span>Share</span>
              <span><CiShare2 className="shareicon" /></span>
            </div>
            <ul className="sharelist">
              <Link><FaFacebookF className="iconsocial" /></Link>
              <Link><a href='https://twitter.com/intent/tweet?text=%40QodeWishlisthttps%3A%2F%2Fbiagiotti.qodeinteractive.com%2Fwishlist%2F%3Fview%3D9d82af25646c64ea' target="_blank" rel="noopener noreferrer"><RiTwitterXLine className="iconsocial" /></a></Link>
              <Link><a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="iconsocial" /></a></Link>
              <Link><a href="#" target="_blank" rel="noopener noreferrer"><FaPinterestP className="iconsocial" /></a></Link>
              <Link><a href="#" target="_blank" rel="noopener noreferrer"><FaTumblr className="iconsocial" /></a></Link>
              <Link><a href="#" target="_blank" rel="noopener noreferrer"><FaVk className="iconsocial" /></a></Link>
              <Link><a href="#" target="_blank" rel="noopener noreferrer"><CiMail className="iconsocial" /></a></Link>
              <Link><a href="#" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="iconsocial" /></a></Link>
            </ul>
          </div>

          <table className="wishlist-table">
            <thead>
              <tr>
                <th className="wishlist-remove"></th>
                <th className="wishlist-thumbnail">Image</th>
                <th className="wishlist-name">Product</th>
                <th className="wishlist-price">Price</th>
                <th className="wishlist-add-to-cart"></th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((product) => (
                <tr key={product.id} className="wishlist-item">
                  <td className="wishlist-remove">
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => removeFromWishlist(product.id)}
                    >
                      ×
                    </button>
                  </td>
                  <td className="wishlist-thumbnail">
                    <img
                      src={product.img || '/default-img.jpg'}
                      alt={product.name || 'Product'}
                      width="100"
                    />
                  </td>
                  <td className="wishlist-name">
                    <span>{product.header || 'No Name'}</span>
                  </td>
                  <td className="wishlist-price">
                    <span className="price-amount">{product.price || '0.00'}</span>
                  </td>
                  <td>
                    <button className='btn_add' onClick={() => handleAddToCart(product)}>
                      Add to cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
