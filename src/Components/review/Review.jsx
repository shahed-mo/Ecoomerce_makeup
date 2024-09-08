import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaStar } from 'react-icons/fa';


const Review = () => {
  return (
    <div id="reviews" className="woocommerce-Reviews">
      <div id="comments">
        <h2 className="woocommerce-Reviews-title">
          1 review for <span>Pink Lipstick</span>
        </h2>
        <ol className="commentlist">
          <li className="review even thread-even depth-1 fax">
            <div id="comment-12" className="comment_container">
              <img
                data-del="avatar"
                src="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/user-img-1-100x100.jpg"
                className="avatar pp-user-avatar avatar-60 photo"
                height="60"
                width="60"
                alt="User avatar"
              />
              <div className="comment-text">
                <div className="star-rating" role="img" aria-label="Rated 5 out of 5">
                  <span style={{ width: '100%' }}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </span>
                </div>
                <p className="meta">
                  <strong className="woocommerce-review__author">Claudia Kennen</strong>
                  <span className="woocommerce-review__dash">–</span>
                  <time className="woocommerce-review__published-date" dateTime="2019-08-14T09:11:59+00:00">
                    August 14, 2019
                  </time>
                </p>
                <div className="description">
                  <p>An populo nonumes mel, vix liber aliquip facilis id, ludus ridens propriae ea nam</p>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>

      <div id="review_form_wrapper">
        <div id="review_form">
          <div id="respond" className="comment-respond">
            <Formik
              initialValues={{ rating: '', comment: '', author: '', email: '', consent: false }}
              validate={values => {
                const errors = {};
                if (!values.rating) {
                  errors.rating = 'Required';
                } else if (values.rating < 1 || values.rating > 5) {
                  errors.rating = 'Rating must be between 1 and 5';
                }
                if (!values.comment) {
                  errors.comment = 'Required';
                }
                if (!values.author) {
                  errors.author = 'Required';
                }
                if (!values.email) {
                  errors.email = 'Required';
                }
                if (!values.consent) {
                  errors.consent = 'You must consent to save your information';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                // Handle form submission logic
                console.log('Form data:', values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="comment-form">
                  <div className="comment-form-rating">
                    <label htmlFor="rating" className='rating'>Your rating</label>
                    <div className="stars">
                      <span>
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </span>
                    </div>
                    <Field as="select" name="rating" id="rating" required>
                      <option value="">Rate…</option>
                      <option value="5">Perfect</option>
                      <option value="4">Good</option>
                      <option value="3">Average</option>
                      <option value="2">Not that bad</option>
                      <option value="1">Very poor</option>
                    </Field>
                    <ErrorMessage name="rating" component="div" className="error" />
                  </div>

                  <div className="comment-form-comment">
                    <Field as="textarea" id="comment" name="comment" placeholder="Your review" cols="45" rows="6" required />
                    <ErrorMessage name="comment" component="div" className="error" />
                  </div>

                  <div className="comment-form-author">
                    <Field id="author" name="author" placeholder="Your Name" type="text" size="30" required className='input' />
                    <ErrorMessage name="author" component="div" className="error" />
                  </div>

                  <div className="comment-form-email">
                    <Field id="email" name="email" placeholder="Your Email" type="email" size="30" required className='input' />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>

                  <div className="comment-form-cookies-consent">
                    <Field id="consent" name="consent" type="checkbox"  />
                    <label htmlFor="consent" style={{fontFamily:'Cormorant', fontSize:'17px', color:'#838383'}}>Save my name, email, and website in this browser for the next time I comment.</label>
                    <ErrorMessage name="consent" component="div" className="error" />
                  </div>

                  <div className="form-submit">
                    <button type="submit" disabled={isSubmitting} id='submit'>
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default Review;
