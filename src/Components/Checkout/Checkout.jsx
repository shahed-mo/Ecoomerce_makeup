import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './Checkout.scss';

const CheckoutForm = () => {
  const location = useLocation();
  const { cartItems = [], quantities = [], total = 0 } = location.state || {};

  const initialValues = {
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    apartment: '',
    city: '',
    orderNotes: '',
    state: '',
    postcode: '',
    phone: '',
    email: ''
  };

  const handleSubmit = (values) => {
    console.log('Checkout Form Submitted:', values);
    // Here, you can handle form submission, e.g., sending data to a server
    // Navigate to a success page after submission
    // navigate('/checkout-success'); // Uncomment if you have a success page
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item, index) => {
      const price = parseFloat(item.price.replace('$', '')); // Remove $ sign from price
      const quantity = quantities[index] || 1;
      return acc + price * quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const totalPrice = total || subtotal; // Default to subtotal if no total is passed

  return (
    <>
    <h4 className='wishlist-title' style={{marginTop:'50px'}}>Checkout</h4>
    <Container className="checkout-form-container">
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <h4>Your cart is currently empty</h4>
          <p>Please add items to your cart before proceeding to checkout.</p>
        </div>
      ) : (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form className="checkout-form">
              <Row>
                <Col md={6}>
                  <h3>Billing Details</h3>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" id="firstName" name="firstName" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" id="lastName" name="lastName" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name (optional)</label>
                    <Field type="text" id="companyName" name="companyName" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country / Region</label>
                    <Field as="select" id="country" name="country" className="form-control">
                      <option value="">Select a country</option>
                      <option value="egypt">Egypt</option>
                      {/* Add more countries here */}
                    </Field>
                  </div>
                  <div className="form-group">
                    <label htmlFor="streetAddress">Street Address</label>
                    <Field type="text" id="streetAddress" name="streetAddress" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apartment">Apartment, Suite, Unit, etc. (optional)</label>
                    <Field type="text" id="apartment" name="apartment" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <Field type="text" id="city" name="city" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State / Province</label>
                    <Field type="text" id="state" name="state" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="postcode">Postcode / ZIP</label>
                    <Field type="text" id="postcode" name="postcode" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <Field type="text" id="phone" name="phone" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <Field type="email" id="email" name="email" className="form-control" />
                  </div>
                </Col>
                <Col md={6} style={{marginTop:'0px'}}>
                <h3>Additional information</h3>
                <div className="form-group">
                <label htmlFor="orderNotes">Order Notes (optional)</label>
                <Field as="textarea" id="orderNotes" name="orderNotes" className="form-control" />
              </div>
                </Col>
                <Col md={6}>
                 <div className="order-summary">
                    <h5>ORDER SUMMARY</h5>
                    {cartItems.map((item, index) => (
                      <div key={index} className="order-item">
                        <span>{item.header}</span>
                        <span>{quantities[index]} x ${parseFloat(item.price.replace('$', '')).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="order-total">
                      <h5>Subtotal</h5>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="order-total">
                      <h5>Total</h5>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </Col>
              </Row>
              
              <Button type="submit" className="btn-checkout">Place Order</Button>
            </Form>
          )}
        </Formik>
      )}
    </Container>
    </>
  );
};

export default CheckoutForm;
