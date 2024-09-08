import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  const { cartItems, updateItemQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState([]);
  const navigate = useNavigate();

  // Function to parse price
  const parsePrice = (price) => {
    return typeof price === 'string' ? parseFloat(price.replace('$', '')) : parseFloat(price) || 0;
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item, index) => {
      const price = parsePrice(item.price);
      const quantity = quantities[index] || item.quantity || 1;
      return acc + price * quantity;
    }, 0);
  };

  // Initialize quantities state
  useEffect(() => {
    setQuantities(cartItems.map(item => item.quantity || 1));
  }, [cartItems]);

  const handleIncrease = (index) => {
    const newQuantity = quantities[index] + 1;
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = newQuantity;
      updateItemQuantity(cartItems[index].id, newQuantity);
      return newQuantities;
    });
  };

  const handleDecrease = (index) => {
    const newQuantity = Math.max(1, quantities[index] - 1);
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = newQuantity;
      updateItemQuantity(cartItems[index].id, newQuantity);
      return newQuantities;
    });
  };

  const subtotal = calculateSubtotal();
  const total = subtotal;

  const proceedToCheckout = () => {
    navigate('/shop/checkout', { state: { cartItems, quantities, total } });
  };

  return (
    <div className="cart-container" style={{ marginTop: '100px' }}>
      <div className="Car">
        <h4>Cart</h4>
      </div>
      {cartItems.length === 0 ? (
        <div className="p">
          <p className="big">Biagiotti Themes</p>
          <p className="empty">Your cart is currently empty.</p>
          <p className="small">Looks like you haven't made your choice yet...</p>
        </div>
      ) : (
        <>
          <form className="woocommerce-cart-form" action="/cart/" method="post">
            <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellSpacing="0">
              <thead>
                <tr>
                  <th className="product-remove"></th>
                  <th className="product-thumbnail"></th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-subtotal">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="woocommerce-cart-form__cart-item cart_item">
                    <td className="product-remove">
                      <button
                        type="button"
                        className="remove"
                        onClick={() => removeFromCart(item)}
                      >
                        ×
                      </button>
                    </td>
                    <td className="product-thumbnail">
                      <img
                        src={item.img || '/default-img.jpg'}
                        alt={item.header || 'Item'}
                        width="100"
                      />
                    </td>
                    <td className="product-name" data-title="Product">
                      <span>{item.header || 'No Name'}</span>
                    </td>
                    <td className="product-price" data-title="Price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>${parsePrice(item.price).toFixed(2)}</bdi>
                      </span>
                    </td>
                    <td className="product-quantity" data-title="Quantity">
                      <div className="quantity-container">
                        <button
                          type="button"
                          onClick={() => handleDecrease(index)}
                          className="decrease-btn"
                        >
                          –
                        </button>
                        <div className="quantity-display">{quantities[index]}</div>
                        <button
                          type="button"
                          onClick={() => handleIncrease(index)}
                          className="increase-btn"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="product-subtotal" data-title="Subtotal">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>${(parsePrice(item.price) * quantities[index]).toFixed(2)}</bdi>
                      </span>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="6" className="actions">
                    <button
                      type="button"
                      className="button"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

          {/* Cart Totals Section */}
          <div className="cart-totals">
            <h4 className='total-h'>Cart Totals</h4>
            <table cellSpacing="0" className="cart-collaterals">
              <tbody className='left'>
                <tr className="cart-subtotal">
                  <th style={{ paddingBottom: '10px' }}>Subtotal</th>
                  <td style={{ paddingBottom: '10px', paddingLeft: '20px' }}>
                    <span className="woocommerce-Price-amount amount">${subtotal.toFixed(2)}</span>
                  </td>
                </tr>
                <tr className="order-total">
                  <th style={{ paddingTop: '20px', paddingBottom: '10px' }}>Total</th>
                  <td>
                    <strong>
                      <span className="woocommerce-Price-amount amount" style={{ paddingTop: '20px', paddingBottom: '10px', paddingLeft: '20px' }}>${total.toFixed(2)}</span>
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="button" className="checkout-button button" onClick={proceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
