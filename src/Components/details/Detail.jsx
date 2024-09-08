import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { WishlistContext } from '../Context/WishlistContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const product = {
    id,
    img: '/path/to/product-image.png',
    header: 'Sample Product',
    price: '$23.00',
    discount: '$27.00',
    p: 'This is a great product description.',
  };

  return (
    <div className="product-details">
      <img src={product.img} alt={product.header} />
      <h1>{product.header}</h1>
      <p>{product.p}</p>
      <div>
        {product.discount && <span className="discount">{product.discount}</span>}
        <span className="price">{product.price}</span>
      </div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
    </div>
  );
};

export default ProductDetails;
